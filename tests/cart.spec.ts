import { test, expect, } from '../fixtures';
import { InventoryPage } from '../pages/InventoryPage.page';

test("Check product is added", async ({page, login}) => {
  const inverntorypage = new InventoryPage(page)

  await inverntorypage.addBackpackToCart()
  await inverntorypage.goToCart()
  expect(page).toHaveURL("/cart.html")
  await expect(inverntorypage.cartBadge).toHaveText("1")
})
