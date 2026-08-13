import { test, expect, } from '../fixtures';
import { CartPage } from '../pages/CartPage.page';
import { InventoryPage } from '../pages/InventoryPage.page';
import { CheckoutPage } from '../pages/CheckoutPage.page';
import { checkoutInfo } from '../test-data/checkout-info';

test("Checkout", async ({page, login}) => {
  const cartpage = new CartPage(page)
  const inventorypage = new InventoryPage(page)
  const checkoutpage = new CheckoutPage(page)

  await inventorypage.addProductsToCart()
  await inventorypage.goToCart()
  await cartpage.proceedToCheckout()
  expect(page).toHaveURL("/checkout-step-one.html")

  await checkoutpage.fillInfo(checkoutInfo.firstName, checkoutInfo.lastName, checkoutInfo.postalCode)
  expect(page).toHaveURL("/checkout-step-two.html")

  await checkoutpage.finish()
  expect(page).toHaveURL("/checkout-complete.html")

  await checkoutpage.backToProducts()
  expect(page).toHaveURL("/inventory.html")
})
