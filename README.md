# Playwright & TypeScript Test Automation Architecture

An enterprise-grade, deterministic test framework demonstrating scalable QA Lead / Architecture patterns. Designed for high-speed CI execution, state isolation, and resilient locator strategies.

## Key Architectural Principles

1. **State Isolation & API Pre-seeding:** Utilizes custom `test.extend` fixtures (`fixtures/auth.fixture.ts`) to seed authentication tokens and test data via REST API prior to DOM execution.
2. **Resilient Web-First Locators:** Enforces accessible locators (`getByRole`, `getByPlaceholder`, `getByTestId`) via the Page Object Model (`pages/VerificationPage.ts`).
3. **Parallel Sharding & CI/CD Pipeline:** Integrated with GitHub Actions (`.github/workflows/playwright.yml`) utilizing matrix strategy sharding across 4 parallel runners.
4. **Diagnostic Trace Retention:** Configured with `trace: 'on-first-retry'` to preserve DOM snapshots, network payloads, and execution logs as CI artifacts.

## Quick Start

```bash
npm install
npx playwright install --with-deps
npm run test
