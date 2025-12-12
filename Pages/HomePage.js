exports.HomePage =
class HomePage {
    constructor(page) {
        this.page = page;
        this.productList = page.locator("(//div[@class='card-block'])/h4/a");
        this.addToCartButton = page.locator("//a[@class='btn btn-success btn-lg']");
        this.cartLink = page.locator("//a[@id='cartur']");
    }

    async addProductToCart(productName) {
        const count = await this.productList.count();
        console.log("Total products: " + count);

        for (let i = 0; i < count; i++) {
            const product = this.productList.nth(i);
            const name = (await product.textContent()).trim();

            if (name === productName) {
                await product.click();

                // Wait for and accept the dialog
                this.page.once('dialog', async dialog => {
                    console.log(dialog.message());
                    await dialog.accept();
                });

                await this.addToCartButton.click();
                break;
            }
        }
    }

    async goToCart() {
        await this.cartLink.click();
    }
}
