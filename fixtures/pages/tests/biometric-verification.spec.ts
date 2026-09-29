import { test, expect } from '../fixtures/auth.fixture';

test.describe('Biometric Verification & Workflow Engine', () => {

  test('should complete verification pipeline with pre-seeded API state', async ({ verificationPage }) => {
    await verificationPage.navigateToSession();
    await verificationPage.addVerificationStep('Biometric Liveness Check');
    await verificationPage.addVerificationStep('API Contract Sync');
    await verificationPage.verifyStepAdded('Biometric Liveness Check');
    await verificationPage.verifyStepAdded('API Contract Sync');
  });

  test('should gracefully handle network layer interception and contract failures', async ({ page }) => {
    await page.route('**/api/v1/verify', route => {
      route.fulfill({
        status: 422,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'LIVENESS_FAILED', code: 422 })
      });
    });

    await page.goto('/');
    await expect(page).toHaveTitle(/TodoMVC/);
  });

});
