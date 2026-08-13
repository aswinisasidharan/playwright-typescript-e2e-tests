import { test as base} from "@playwright/test"
import { LoginPage } from "./pages/LoginPage.page"
import { PASSWORD, users } from "./test-data/users.ts";

type MyFixture = {
    login: void;
    username: string;
    loginPage: LoginPage
}

export const test = base.extend<MyFixture>({
    username: [users.standard, { option: true }],

    login: async ({page, username}, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.login(username, PASSWORD);
        await use();
    },

    loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect } from "@playwright/test";
