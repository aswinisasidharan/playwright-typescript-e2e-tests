// tests/login.spec.ts
import { test, expect } from '../fixtures';
import { users, PASSWORD } from '../test-data/users';

const validUsers = [
  users.standard,
  users.problem,
  users.performanceGlitch,
  users.error,
  users.visual,
];

for (const username of validUsers) {
  test.describe(`login as ${username}`, () => {
    test.use({ username });

    test(`should reach inventory page`, async ({ page, login }) => {
      await expect(page).toHaveURL("/inventory.html");
    });
  });
}

test("locked out user should see error and stay on login page", async ({ page, loginPage}) => {
  await loginPage.login(users.lockedOut, PASSWORD);

  await expect(page).toHaveURL("/"); // stays on login page
  await expect(page.getByText(/locked out/i)).toBeVisible();
});