# playwright-typescript-api-tests

End-to-end UI test automation framework for [SauceDemo](https://www.saucedemo.com/), built with Playwright and TypeScript using the Page Object Model.

## Tech Stack

- **Playwright** — browser automation
- **TypeScript** — typed test and page-object code
- **GitHub Actions** — CI on every push/PR

## Project Structure

```
.
├── fixtures.ts                  # Custom Playwright fixtures (shared setup)
├── pages/
│   ├── LoginPage.page.ts
│   ├── InventoryPage.page.ts
│   ├── CartPage.page.ts
│   └── CheckoutPage.page.ts
├── test-data/
│   ├── users.ts                 # Test user credentials
│   └── checkout-info.ts         # Checkout form data
├── tests/
│   ├── login.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
├── playwright.config.ts
└── .github/workflows/playwright.yml
```

## Architecture

Each page of the app has a corresponding **Page Object** in `pages/`, encapsulating locators and interactions. Tests in `tests/` consume these page objects through **custom fixtures** defined in `fixtures.ts`, keeping test files focused on behavior rather than implementation detail.

Test data (users, checkout info) is kept separate under `test-data/` so scenarios can be extended without touching page objects or test logic.

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

```bash
npm install
npx playwright install --with-deps
```

### Running Tests

```bash
# Run the full suite
npx playwright test

# Run a specific spec
npx playwright test tests/login.spec.ts

# Run in headed mode
npx playwright test --headed

# Open the HTML report after a run
npx playwright show-report
```

## Continuous Integration

Tests run automatically via GitHub Actions on every push and pull request. See [`.github/workflows/playwright.yml`](.github/workflows/playwright.yml) for the workflow definition.

## Test Coverage

| Spec | Covers |
|---|---|
| `login.spec.ts` | Authentication flows |
| `cart.spec.ts` | Adding/removing items from cart |
| `checkout.spec.ts` | End-to-end checkout flow |

## Author

**Aswini Sasidharan** — QA Automation Engineer
[LinkedIn](https://www.linkedin.com/in/aswinisasidharan/) · [GitHub](https://github.com/aswinisasidharan)
