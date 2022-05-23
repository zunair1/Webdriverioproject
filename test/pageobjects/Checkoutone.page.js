

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Checkoutone extends Page {
    /**
     * define selectors using getter methods
     */
    get Firstname() {
        return $('#first-name');
    }

    get Lastname() {
        return $('#last-name');
    }
   
    get Zipcode() {
        return $('#postal-code');
    }
   
    get continuebutton() {
        return $('#continue');
    }
   
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async Filltheform (firstname,lastname, zipcode) {
        await this.Firstname.setValue(firstname);
        await this.Lastname.setValue(lastname);
        await this.Zipcode.setValue(zipcode);
    }

    async Clickoncontinuebutton () {
        await this.continuebutton.click();
    }
 

   
}

module.exports = new Checkoutone();
