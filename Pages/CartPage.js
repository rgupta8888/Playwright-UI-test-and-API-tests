exports.CartPage =
class CartPage {

    constructor(page) {
        this.page = page;
        this.noOfproducts = "//tbody[@id='tbodyid']/tr/td[2]";
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
