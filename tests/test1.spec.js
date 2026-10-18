import { test, expect } from '@playwright/test';

test.use({ storageState: 'auth.json' });

test('test', async ({ page }) => {
  await page.goto('https://barangayos.com/demo1/staff/dashboard');
  await page.getByRole('link', { name: 'Requests', exact: true }).click();
  await page.getByRole('link', { name: 'New Request' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Search for a resident...' }).click();
  await page.getByPlaceholder('Type a name to search...').fill('zent');
  await page.getByRole('listbox', { name: 'Suggestions' }).click();
  await page.getByRole('option', { name: 'Barangay Clearances - ₱' }).click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  await page.getByRole('textbox', { name: 'Full Address*' }).click();
  await page.getByRole('textbox', { name: 'Full Address*' }).fill('test');
  await page.getByRole('combobox', { name: 'Province*' }).click();
  await page.getByRole('listbox', { name: 'Suggestions' }).click();
  await page.getByRole('combobox', { name: 'City/Municipality*' }).click();
  await page.getByRole('listbox', { name: 'Suggestions' }).click();
  await page.getByRole('combobox', { name: 'Barangay*' }).click();
  await page.getByRole('listbox', { name: 'Suggestions' }).click();
  await page.getByRole('textbox', { name: 'Purpose*' }).click();
  await page.getByRole('textbox', { name: 'Purpose*' }).fill('test');
  await page.getByRole('textbox', { name: 'Occupation*' }).click();
  await page.getByRole('textbox', { name: 'Occupation*' }).fill('test');
  await page.getByRole('button', { name: 'Create Request' }).click();
  await page.getByText('Click to upload or drag and dropMax size: 10MB per file0 of 5 files uploaded').click();
  await page.getByRole('link', { name: 'Cancel' }).click();
});