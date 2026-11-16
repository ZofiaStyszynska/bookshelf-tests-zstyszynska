import { expect, test as base } from '@playwright/test';
import { BookCatalogPage } from '../pages/BookCatalogPage';
import { LoginPage } from '../pages/LoginPage';

export { expect };

export const test = base.extend<{ catalog: BookCatalogPage }>({
  catalog: async ({ page }, use) => {
    const { BOOKSHELF_EMAIL, BOOKSHELF_PASSWORD } = process.env;

    if (!BOOKSHELF_EMAIL || !BOOKSHELF_PASSWORD) {
      throw new Error('Set BOOKSHELF_EMAIL and BOOKSHELF_PASSWORD.');
    }

    const login = new LoginPage(page);
    await login.signIn(BOOKSHELF_EMAIL, BOOKSHELF_PASSWORD);
    await expect(page).toHaveURL(/\/books$/);

    await use(new BookCatalogPage(page));
  },
});