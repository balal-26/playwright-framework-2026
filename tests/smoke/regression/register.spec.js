import {test, expect} from '@playwright/test';

test.describe('Register', () => {
  test('should register a new user', async ({ page }) => {
    await page.goto('https://example.com/register');        
  });
});
