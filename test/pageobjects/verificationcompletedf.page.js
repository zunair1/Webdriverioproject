

const Page = require('./page');


class verificationcompletedf extends Page {
  
    get gettext() {
        return $('.complete-header');
    }


    async verifytext () {
        await expect(this.gettext).toHaveTextContaining('THANK YOU FdOR YOUR ORDER');
    }
 

   
}

module.exports = new verificationcompletedf();
