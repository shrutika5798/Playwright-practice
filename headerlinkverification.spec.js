import { test, expect } from '@playwright/test';

test('Header Link Verification', async ({ page }) => {
    await page.goto("https://www.lasting-wellness.ca/");
  //   await page.waitForLoadState('domcontentloaded');
    const link=[
     {
      Name:'About',
      url:'https://www.lasting-wellness.ca/about',
      expectedTitle: /About/
     },
     {
    Name:'Services',
    url:'https://www.lasting-wellness.ca/service',
    expectedTitle: /Service/
     },
     {
    Name:'Groups',
    url:'https://www.lasting-wellness.ca/group',
    expectedTitle: /Groups/
     },
     {
    Name:'FAQs',
    url:'https://www.lasting-wellness.ca/faq',
    expectedTitle: /FAQ/
     },
     {
    Name:'Contact',
    url:'https://www.lasting-wellness.ca/contact',
    expectedTitle: /Contact/
     }
    ];

    for (const links of link)
    {
         await page.locator(`a:has-text("${links.Name}")`)
              .filter({ has: page.locator(':visible') })
              .first()
              .click();
        await expect(page).toHaveURL(links.url);
     //    await links.locator.click();
        await expect(page).toHaveTitle(links.expectedTitle);
        console.log(`${links.Name} navigation successful`);
    }
});

