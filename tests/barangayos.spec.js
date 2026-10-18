import { test, expect } from '@playwright/test';

// Tell this specific test to use your saved logged-in session:
test.use({ storageState: 'auth.json' });

test('BarangayOS Staff Navigation and Workflow Test', async ({ page }) => {
  // 1. Dashboard Navigation
  await page.goto('https://barangayos.com/demo1/staff/dashboard');
  await page.getByRole('link', { name: 'Bebot, Beta' }).click();

  // 2. Document Requests Flow
  await page.getByRole('link', { name: 'Requests', exact: true }).click();
  await page.getByRole('tab', { name: 'Released' }).click();
  await page.getByRole('link', { name: 'New Request' }).click();

  // Select Resident using Placeholder + Text Locator
  await page.getByRole('combobox').filter({ hasText: 'Search for a resident...' }).click();
  await page.getByPlaceholder('Type a name to search...').fill('Zent');
  await page.getByText('Zent Abordo').click();

  // Select Document Type
  await page.getByText('Barangay Clearances').waitFor({ state: 'visible' });
  await page.getByText('Barangay Clearances').click();
  await page.getByRole('checkbox', { name: 'Option A' }).click();

  // 3. Document Types Creation
  await page.getByRole('link', { name: 'Types' }).click();
  await page.getByRole('button', { name: 'Archived (5)' }).click();
  await page.getByRole('link', { name: 'Create Document Type' }).click();

  await page.getByRole('textbox', { name: 'Code *' }).fill('TEST');
  await page.getByText('Certificate').click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('Test Certificate');
  await page.getByRole('textbox', { name: 'Description *' }).fill('Testing');
  await page.getByRole('spinbutton', { name: 'Base Fee *' }).fill('100');
  await page.getByRole('button', { name: 'No expiration' }).click();
  await page.getByRole('switch', { name: 'Auto Release for Verified' }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('textbox', { name: 'Label (optional)' }).fill('Test');
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('tab', { name: 'Basic' }).click();
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await page.getByRole('button', { name: 'Create Document Type' }).click();

  // 4. Finance: Billing Flow
  await page.getByRole('link', { name: 'Overview' }).click();
  await page.getByRole('link', { name: 'Billing' }).click();
  await page.getByRole('link', { name: 'Send a bill' }).click();

  await page.getByRole('combobox').click();
  await page.getByText('Zent Abordo').first().click();
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('textbox', { name: 'e.g. Hall rental, Membership' }).fill('Test');
  await page.getByRole('textbox', { name: '0.00' }).fill('100');
  await page.getByRole('switch', { name: 'Apply a discount' }).click();
  await page.getByRole('radio', { name: '%' }).click();
  await page.getByRole('spinbutton', { name: '0' }).fill('90');
  await page.getByRole('button', { name: 'No due date' }).click();
  await page.getByRole('textbox', { name: 'Note' }).fill('n/a');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Send bill' }).click();

  // 5. Finance: Income Flow
  await page.getByRole('link', { name: 'Income' }).click();
  await page.getByRole('button', { name: 'Record income' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Who paid? Search or add…' }).click();
  await page.getByText('Zent Abordo').first().click();
  await page.getByRole('combobox').filter({ hasText: 'Pick a category' }).click();
  await page.getByText('General').first().click();
  await page.getByRole('textbox', { name: 'What was it for?' }).fill('TEST');
  await page.getByRole('textbox', { name: 'Amount' }).fill('100');
  await page.getByRole('textbox', { name: 'OR# reference' }).fill('1234');
  await page.getByRole('button', { name: 'Record income' }).click();

  // 6. Finance: Expenses Flow
  await page.getByRole('link', { name: 'Expenses' }).click();
  await page.getByRole('button', { name: 'Record expense' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Who was paid? Search or add…' }).click();
  await page.getByPlaceholder('Search residents, households').fill('zent');
  await page.getByText('Zent Abordo').first().click();
  await page.getByRole('combobox').filter({ hasText: 'Pick a category' }).click();
  await page.getByText('No budget').click();
  await page.getByRole('textbox', { name: 'Amount' }).fill('5000');
  await page.getByText('GCash').click();
  await page.getByRole('textbox', { name: 'Reference number' }).fill('1234');
  await page.getByRole('textbox', { name: 'OR# reference' }).fill('12345');
  await page.getByRole('textbox', { name: 'Note' }).fill('n/a');
  await page.getByRole('button', { name: 'Record expense' }).click();

  // 7. Accounts & Directory Management
  await page.getByRole('link', { name: 'Accounts' }).click();
  await page.getByRole('button', { name: 'Add person or business' }).click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).fill('Test');
  await page.getByRole('textbox', { name: 'Email' }).fill('test@gmail.com');
  await page.getByRole('textbox', { name: 'Phone' }).fill('000000000');
  await page.getByRole('textbox', { name: 'Address' }).fill('Test city');