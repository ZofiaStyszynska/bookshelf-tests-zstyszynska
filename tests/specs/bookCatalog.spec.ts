import { test } from '../fixtures/test';

test('shows the book in the catalog', async ({ catalog }) => {
  await catalog.checkBookIsVisible('The Paper Lighthouse');
});