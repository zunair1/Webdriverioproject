

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class inventorypage extends Page {
    /**
     * define selectors using getter methods
     */
    get addtocartbutton() {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get clickonbasket() {
        return $('#shopping_cart_container');
    }
   
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async clicktoaddcart () {
        await this.addtocartbutton.click();
    }
    async clickonbaskettomove() {
        await this.clickonbasket.click();
    }

   
}

module.exports = new inventorypage();
