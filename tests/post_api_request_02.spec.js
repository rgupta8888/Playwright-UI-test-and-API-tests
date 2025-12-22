const { test, expect } = require("@playwright/test");
const postRequest = require("../test-data/post_request1_body.json");
const postRequest2 = require("../test-data/post_request2_body.json");

test.describe.serial("POST API Request Tests", () => {
    /* ------------------- TEST 1 ------------------- */
    test("Create POST booking API request using JSON file", async ({ request }) => {

        const postAPIResponse = await request.post(
            "https://restful-booker.herokuapp.com/booking",
            { data: postRequest }
        );

        expect(postAPIResponse.ok()).toBeTruthy();
        expect(postAPIResponse.status()).toBe(200);

        const postAPIResponseBody = await postAPIResponse.json();
        console.log(postAPIResponseBody);

        // validate response body
        expect(postAPIResponseBody.booking).toHaveProperty(
            "firstname",
            "testers talk playwright"
        );
        expect(postAPIResponseBody.booking).toHaveProperty(
            "lastname",
            "testers talk api testing"
        );

        // validate nested object
        expect(postAPIResponseBody.booking.bookingdates).toMatchObject({
            checkin: "2018-01-01",
            checkout: "2019-01-01",
        });
    });

    /* ------------------- TEST 2 ------------------- */
    test("Create POST object API request using static JSON body", async ({ request }) => {

        const postAPIResponse = await request.post(
            "https://api.restful-api.dev/objects",
            { data: postRequest2 }
        );

        expect(postAPIResponse.ok()).toBeTruthy();
        expect(postAPIResponse.status()).toBe(200);

        const postAPIResponseBody = await postAPIResponse.json();
        console.log(postAPIResponseBody);

        // validate response
        expect.soft(postAPIResponseBody.name).toBe("Apple MacBook Pro 16");
        expect.soft(postAPIResponseBody.data).toHaveProperty("year", 2019);
    })
});