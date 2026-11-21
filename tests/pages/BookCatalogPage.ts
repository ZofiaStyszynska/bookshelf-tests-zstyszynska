import type { Locator, Page } from '@playwright/test';
import { BookDetailsPage } from './BookDetailsPage';

export class BookCatalogPage {
  constructor(private readonly page: Page) {}

  bookLink(title: string): Locator {
    return this.page.getByRole('link', { name: title, exact: true });
  }

  async openBookDetails(title: string): Promise<BookDetailsPage> {
    await this.bookLink(title).click();
    return new BookDetailsPage(this.page);
  }
}