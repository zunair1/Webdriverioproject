

const Page = require('./page');


class verificationcompleted extends Page {
  
    get gettext() {
        return $('.complete-header');
    }


    async verifytext () {
        await expect(this.gettext).toHaveTextContaining('THANK YOU FOR YOUR ORDER');
    }
 

   
}

module.exports = new verificationcompleted();
