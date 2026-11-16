import { expect, type Page } from '@playwright/test';

export class BookCatalogPage {
  constructor(private readonly page: Page) {}

  async checkBookIsVisible(title: string) {
    await expect(
      this.page.getByRole('link', { name: title, exact: true }),
    ).toBeVisible();
  }
}