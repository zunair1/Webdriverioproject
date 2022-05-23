

const Page = require('./page');


class Checkouttwo extends Page {
  
    get getfinish() {
        return $('#finish');
    }


    async Clickonfinish () {
        await this.getfinish.scrollIntoView();
        await this.getfinish.click();
    }
 

   
}

module.exports = new Checkouttwo();
