import { test } from '../fixtures/test';

test('shows the book in the catalog', async ({ catalog }) => {
  await expect(catalog.bookLink('The Paper Lighthouse')).toBeVisible();
});

test('shows the selected book details', async ({ catalog }) => {
  const details = await catalog.openBookDetails('The Paper Lighthouse');

  await expect(details.bookTitle('The Paper Lighthouse')).toBeVisible();
  await expect(details.bookAuthor()).toHaveText('Maya Reed');
});