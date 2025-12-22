const { test, expect } = require("@playwright/test");
const postRequest = require("../test-data/post_request1_body.json");

test("Query parameter in playwright api testing", async ({ request }) => {
  // create post api request using playwright
  const postAPIResponse = await request.post("https://restful-booker.herokuapp.com/booking", {
    data: postRequest,
  });

  // create GET api request using playwright
  const getAPIResponse = await request.get("https://restful-booker.herokuapp.com/booking/", {
    params: {
      firstname: "testers talk playwright",
      lastname: "testers talk api testing",
    },
  });

  // validate status code
  console.log(await getAPIResponse.json());
  expect(getAPIResponse.ok()).toBeTruthy();
  expect(getAPIResponse.status()).toBe(200);
});