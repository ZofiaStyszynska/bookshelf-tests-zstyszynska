import { expect, type Page } from '@playwright/test';

export class BookCatalogPage {
  constructor(private readonly page: Page) {}

    bookLink(title: string): Locator {
      return this.page.getByRole('link', { name: title, exact: true });
    }

}