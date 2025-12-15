exports.CartPage =
    class CartPage {

        constructor(page) {
            this.page = page;
            this.noOfproducts = "//tbody[@id='tbodyid']/tr/td[2]";
            this.deleteProducts = "//tbody[@id='tbodyid']/tr/td[4]";
        }

        async emptyCart() {
            // Keep deleting the first product until no products remain
            while (true) {
                const deleteButtons = this.page.locator(this.deleteProducts + "/a");
                const count = await deleteButtons.count();
                if (count === 0) break;
                await deleteButtons.nth(0).click();
                // Wait for the row to be removed
                await this.page.waitForTimeout(9000);
            }
        }


        async checkProductInCart(productName) {
            const products = this.page.locator(this.noOfproducts);
            const count = await products.count();

            console.log("Total products in cart: " + count);

            for (let i = 0; i < count; i++) {
                const productCell = products.nth(i);
                const name = (await productCell.textContent()).trim();

                console.log("Checking product:", name);

                if (name === productName) {
                    return true;
                }
            }

            return false;
        }
    }
