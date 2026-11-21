import { test } from '../fixtures/test';

test('shows the book in the catalog', async ({ catalog }) => {
  await expect(catalog.bookLink('The Paper Lighthouse')).toBeVisible();
});