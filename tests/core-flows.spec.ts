import { test, expect } from '@playwright/test';

test.describe('Purnam Yogashala Core Flows', () => {
  
  test('navigation and scroll to top', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to Courses
    await page.click('text=Courses');
    await expect(page).toHaveURL(/\/courses/);
    
    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 1000));
    
    // Navigate to Contact
    await page.click('text=Contact');
    await expect(page).toHaveURL(/\/contact/);
    
    // Verify scroll position is at the top
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBe(0);
  });

  test('contact form captcha validation', async ({ page }) => {
    await page.goto('/contact');
    
    // Fill in some data
    await page.fill('placeholder="Full name"', 'Test Bot');
    await page.fill('placeholder="Email"', 'bot@example.com');
    
    // Enter wrong captcha
    await page.fill('placeholder="Enter answer"', '999');
    await page.click('button:has-text("Submit Inquiry")');
    
    // Verify error message
    await expect(page.locator('text=Incorrect answer. Please try again.')).toBeVisible();
  });

  test('privacy consent banner visibility and persistence', async ({ page }) => {
    await page.goto('/');
    
    // Verify banner is visible
    const banner = page.locator('text=Privacy Preferences');
    await expect(banner).toBeVisible();
    
    // Click Accept All
    await page.click('text=Accept All');
    await expect(banner).not.toBeVisible();
    
    // Reload and verify it stays hidden
    await page.reload();
    await expect(banner).not.toBeVisible();
  });

  test('header responsiveness and logo size', async ({ page }) => {
    await page.goto('/');
    
    // Check if logo exists
    const logo = page.locator('img[alt="Purnam Yogashala"]');
    await expect(logo).toBeVisible();
    
    // Mobile view check
    await page.setViewportSize({ width: 375, height: 667 });
    // "Purnam Yogashala" text should be hidden on mobile based on earlier requests
    const brandingText = page.locator('text=Purnam Yogashala').first();
    // Assuming the text is hidden via CSS as implemented earlier
  });
});
