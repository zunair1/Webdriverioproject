

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class cartpage extends Page {
    /**
     * define selectors using getter methods
     */
    get checkoutbutton() {
        return $('#checkout');
    }

    async clickoncheckoutcart () {
        await this.checkoutbutton.click();
    }
   
   
}

module.exports = new cartpage();
