import { test as base, expect } from '@playwright/test';
import { VerificationPage } from '../pages/VerificationPage';

type AuthenticatedFixtures = {
  verificationPage: VerificationPage;
  sessionToken: string;
};

export const test = base.extend<AuthenticatedFixtures>({
  sessionToken: async ({ request }, use) => {
    const sessionToken = 'mock_jwt_session_token_qa_lead_architecture';
    await use(sessionToken);
  },

  verificationPage: async ({ page, sessionToken }, use) => {
    const verificationPage = new VerificationPage(page);
    await page.addInitScript((token) => {
      window.localStorage.setItem('auth_token', token);
    }, sessionToken);

    await use(verificationPage);
  }
});

export { expect };
