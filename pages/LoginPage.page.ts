import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly userName: Locator;
    readonly password: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.getByPlaceholder("Username")
        this.password = page.getByPlaceholder("Password")
        this.submitButton = page.getByText("Login")
    }

    async login(username: string, password: string) {
        await this.page.goto("/");
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.submitButton.click();
    }
}
