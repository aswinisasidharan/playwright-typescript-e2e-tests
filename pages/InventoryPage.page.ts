import { type Locator, type Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly addBackpackButton: Locator;
  readonly addBikeLightButton: Locator;
  readonly shoppingCartLink: Locator;
  readonly cartBadge: Locator;
  readonly sortDropdown: Locator;
  readonly displayedPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addBackpackButton = page.getByTestId("add-to-cart-sauce-labs-backpack");
    this.addBikeLightButton = page.getByTestId("add-to-cart-sauce-labs-bike-light");
    this.shoppingCartLink = page.getByTestId("shopping-cart-link");
    this.cartBadge = page.getByTestId("shopping-cart-badge");
    this.sortDropdown = page.getByTestId("product-sort-container")
    this.displayedPrice = page.getByTestId("inventory-item-price")
  }

  async addBackpackToCart() {
    await this.addBackpackButton.click();
  }

  async addProductsToCart() {
    await this.addBackpackButton.click();
    await this.addBikeLightButton.click();
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }

  async selectSortOption(value:string) {
    await this.sortDropdown.selectOption(value)
  }

  async getDisplayedPrices() {
    const rawTests = await this.displayedPrice.allInnerTexts()
    return rawTests.map(Text => parseFloat(Text.replace("$", "")))
  }
}
