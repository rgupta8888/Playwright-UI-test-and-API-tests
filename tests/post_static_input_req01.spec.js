const { test, expect } = require("@playwright/test");

test.describe.serial("POST API request with static input @poststatic", () => {

    test("Create POST api request using static request body in playwright", async ({
        request,
    }) => {
        // create post api request using playwright
        const postAPIResponse = await request.post("https://restful-booker.herokuapp.com/booking", {
            data: {
                firstname: "testers talk playwright",
                lastname: "testers talk api testing",
                totalprice: 1000,
                depositpaid: true,
                bookingdates: {
                    checkin: "2018-01-01",
                    checkout: "2019-01-01",
                },
                additionalneeds: "super bowls",
            },
        });

        // validate status code
        console.log(await postAPIResponse.json());

        expect(postAPIResponse.ok()).toBeTruthy();
        expect(postAPIResponse.status()).toBe(200);

        // validate api response json obj
        const postAPIResponseBody = await postAPIResponse.json();

        expect(postAPIResponseBody.booking).toHaveProperty(
            "firstname",
            "testers talk playwright"
        );
        expect(postAPIResponseBody.booking).toHaveProperty(
            "lastname",
            "testers talk api testing"
        );

        // validate api response nested json obj
        expect(postAPIResponseBody.booking.bookingdates).toHaveProperty(
            "checkin",
            "2018-01-01"
        );
        expect(postAPIResponseBody.booking.bookingdates).toHaveProperty(
            "checkout",
            "2019-01-01"
        );
    })




    test("Create POST api request 2 using static request body in playwright", async ({
        request,
    }) => {
        // create post api request using playwright
        const postAPIResponse = await request.post("https://api.restful-api.dev/objects", {
            data: {
                "name": "Apple MacBook Pro 16",
                "data": {
                    "year": 2019,
                    "price": 1849.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            },
        });

        // validate status code
        console.log(await postAPIResponse.json());

        expect(postAPIResponse.ok()).toBeTruthy();
        expect(postAPIResponse.status()).toBe(200);

        // validate api response json obj
        const postAPIResponseBody = await postAPIResponse.json();

        expect(postAPIResponseBody).toHaveProperty("name");
        expect(postAPIResponseBody.name).toBe("Apple MacBook Pro 16");
        expect(postAPIResponseBody.data).toHaveProperty(
            "year",
            2019
        );
    })
});