import { type Locator, type Page } from "@playwright/test";

export class CheckoutPage {
    readonly page: Page
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly backToProductsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.getByPlaceholder("First Name");
        this.lastName = page.getByPlaceholder("Last Name");
        this.postalCode = page.getByPlaceholder("Zip/Postal Code")
        this.continueButton = page.getByTestId("continue")
        this.finishButton = page.getByTestId("finish")
        this.backToProductsButton = page.getByTestId("back-to-products")
    }

    async fillInfo(firstname: string, lastname: string, postalcode: string) {
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.postalCode.fill(postalcode);
        await this.continueButton.click();
    }

    async finish() {
        await this.finishButton.click();
    }

    async backToProducts() {
        await this.backToProductsButton.click();
    }
}