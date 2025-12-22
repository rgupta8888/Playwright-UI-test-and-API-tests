const { test, expect } = require("@playwright/test");
const { faker } = require("@faker-js/faker");
const { DateTime } = require("luxon");

/* ------------------- TEST 1 ------------------- */
test("Create POST booking API request using dynamic body", async ({ request }) => {

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const totalPrice = faker.number.int({ max: 1000 });

  const checkInDate = DateTime.now().toFormat("yyyy-MM-dd");
  const checkOutDate = DateTime.now().plus({ days: 5 }).toFormat("yyyy-MM-dd");

  const postAPIResponse = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      data: {
        firstname: firstName,
        lastname: lastName,
        totalprice: totalPrice,
        depositpaid: true,
        bookingdates: {
          checkin: checkInDate,
          checkout: checkOutDate,
        },
        additionalneeds: "super bowls",
      },
    }
  );

  expect(postAPIResponse.ok()).toBeTruthy();
  expect(postAPIResponse.status()).toBe(200);

  const responseBody = await postAPIResponse.json();
  console.log(responseBody);

  expect(responseBody.booking).toMatchObject({
    firstname: firstName,
    lastname: lastName,
  });

  expect(responseBody.booking.bookingdates).toMatchObject({
    checkin: checkInDate,
    checkout: checkOutDate,
  });
});

/* ------------------- TEST 2 ------------------- */
test("Create POST object API request using dynamic data", async ({ request }) => {

  const productName = faker.person.firstName();
  const price = faker.number.float({ max: 1000 });

  const postAPIResponse = await request.post(
    "https://api.restful-api.dev/objects",
    {
      data: {
        name: `${productName} MacBook Pro 16`,
        data: {
          year: 2019,
          price: price,
          "CPU model": "Intel Core i9",
          "Hard disk size": "1 TB",
        },
      },
    }
  );

  expect(postAPIResponse.ok()).toBeTruthy();
  expect(postAPIResponse.status()).toBe(200);

  const responseBody = await postAPIResponse.json();
  console.log(responseBody);

  expect.soft(responseBody.name).toContain("MacBook Pro 16");
  expect.soft(responseBody.data).toHaveProperty("price", price);
});
