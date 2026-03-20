import { test, expect } from '@playwright/test';
//Valid Scenario (Postive test case )
test('Submit Form', async ({ page }) => {
    await page.goto('https://www.lasting-wellness.ca/contact');

    await page.getByLabel('First name').fill('Test');
    await page.getByLabel('Last name').fill('User');
    await page.getByLabel('Email').fill('developmentnonstop@gmail.com'); 
    await page.getByLabel('Phone').fill('9876543210');
    await page.getByLabel('Message').fill('Hello!');

    await page.getByRole('button', { name: /submit/i }).click();

});
//InValid Scenario (Negative test case )

test('Invalid submit', async ({ page }) => {
  await page.goto('https://www.lasting-wellness.ca/contact');
 const submitBtn = page.getByRole('button', { name: /submit/i });
  await submitBtn.click({ force: true });
 // await page.pause();
});

//Error message validation
test('Mandatory field', async ({ page }) => {

  await page.goto('https://www.lasting-wellness.ca/contact');

  // ✅ Scroll page (browser context)
  await page.evaluate(() => {
    const container = document.querySelector('#SITE_CONTAINER');
    if (container) {
      container.scrollTo(0, container.scrollHeight);
    }
  });

  // ✅ Now back to Playwright context
  const submitButton = page.getByRole('button', { name: /submit/i });

  await submitButton.click();
  await page.waitForTimeout(5000);
  await expect(page.getByText(/first name/i)).toBeVisible();
  await expect(page.getByText(/last name/i)).toBeVisible();
  await expect(page.locator('text=/email/i')).toBeVisible();
  await expect(page.getByText(/phone/i)).toBeVisible();
  await page.locator('text=/enter an answer/i').count();
  await page.pause();

});


