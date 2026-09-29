import { Page, Locator, expect } from '@playwright/test';

export class VerificationPage {
  readonly page: Page;
  readonly newTodoInput: Locator;
  readonly todoItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodoInput = page.getByPlaceholder('What needs to be done?');
    this.todoItems = page.getByTestId('todo-title');
  }

  async navigateToSession() {
    await this.page.goto('/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async addVerificationStep(stepName: string) {
    await expect(this.newTodoInput).toBeVisible();
    await this.newTodoInput.fill(stepName);
    await this.newTodoInput.press('Enter');
  }

  async verifyStepAdded(stepName: string) {
    await expect(this.page.getByText(stepName)).toBeVisible();
  }
}
