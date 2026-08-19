import { test, expect } from "../fixtures";
import { InventoryPage } from "../pages/InventoryPage.page";


test("Sort inventory by price", async ({page, login}) => {
    const inventorypage = new InventoryPage(page)

    // sort from low to high
    await inventorypage.selectSortOption("lohi")
    const prices = await inventorypage.getDisplayedPrices();

    const sortedPrices = prices.slice().sort((a, b) => a - b);
    expect(prices).toEqual(sortedPrices) 

})