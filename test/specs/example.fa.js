const CartPage = require('../pageobjects/Cart.page');
const inventoryPage = require('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');
const Checkoutone = require('../pageobjects/Checkoutone.page');
const Checkouttwo = require('../pageobjects/Checkouttwo.page');
const verificationcompletedf = require('../pageobjects/verificationcompletedf.page');
const allureReporter = require('@wdio/allure-reporter').default

describe('Sauce negative cases', () => {
    it('Login and add item to the cart', async () => {
        allureReporter.addFeature("Test Adding item to cart")
        allureReporter.addStep("Open the browser")
        await LoginPage.open();
        allureReporter.addStep("Enter valid credential to Login")
        await LoginPage.login('standard_user', 'secret_sauce');
        allureReporter.addStep("add item to cart")
        await inventoryPage.clicktoaddcart();
        await inventoryPage.clickonbaskettomove();
        
    })
    
    it('Go to cart page to see cart description', async () => {
        allureReporter.addFeature("Checkout Cart")
        allureReporter.addStep("click on checkout")
        await CartPage.clickoncheckoutcart();
    })

    it('Go to checkout first page by filling form', async () => {
        allureReporter.addFeature("go to first and second checkout page")
        allureReporter.addStep("fill the form")
        await Checkoutone.Filltheform("zunair","test","12335");
        allureReporter.addStep("Click on continue button")
        await Checkoutone.Clickoncontinuebutton();
        allureReporter.addStep("Click on finish button from second page")
        await Checkouttwo.Clickonfinish();
        await verificationcompletedf.verifytext();
       })
});


