const { test, expect } = require("@playwright/test");

test.describe("Sample Regression API tests @reg", () => {

    let userId;

    test("Get api request @get", async ({ request }) => {

        const response = await request.get("https://api.restful-api.dev/objects");
        expect(response.status()).toBe(200);
    });

    test("Post api request @post", async ({ request }) => {

        const payload = {
            name: "Apple MacBook Pro 16",
            data: {
                year: 2019,
                price: 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        };

        const response = await request.post("https://api.restful-api.dev/objects", {
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        userId = responseBody.id;    // store ID for next test
    });

    test("Put api request @put", async ({ request }) => {

        const payload = {
            name: "Apple MacBook Pro 16",
            data: {
                year: 2019,
                price: 2049.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB",
                color: "silver"
            }
        };

        const response = await request.put(`https://api.restful-api.dev/objects/${userId}`, {
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        });

        console.log(await response.json());
        expect(response.status()).toBe(200);
    });

    test("Delete api request @delete", async ({ request }) => {

        const response = await request.delete(`https://api.restful-api.dev/objects/${userId}`);
        console.log(await response.json());
        expect(response.status()).toBe(200);
    });

});
