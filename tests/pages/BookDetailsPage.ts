import type { Locator, Page } from '@playwright/test';

export class BookDetailsPage {
  constructor(private readonly page: Page) {}

  bookTitle(title: string): Locator {
    return this.page.getByRole('heading', { name: title, exact: true });
  }

  bookAuthor(): Locator {
    return this.page.getByTestId('book-author');
  }
}
