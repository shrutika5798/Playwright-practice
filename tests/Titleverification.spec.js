import { test, expect } from '@playwright/test';

test('My demo test', async ({ page }) => {
    await page.goto("https://www.lasting-wellness.ca/", 
        {
  waitUntil: 'domcontentloaded',
  timeout: 60000
        }),
    await expect(page).toHaveTitle("Complex Trauma Therapy in Guelph & Ontario | Lasting Wellness Therapy");
    console.log("Title verified successfully"),

// About page
    await page.goto("https://www.lasting-wellness.ca/about");
    const ExpectedTitle = "About Lisa's Approach to Counselling | Lasting Wellness Therapy";
    console.log("Expected title:", ExpectedTitle);
    console.log("Current title:" , await page.title());
    await expect(page).toHaveTitle(ExpectedTitle);

    //Service page 
     await page.goto(" https://www.lasting-wellness.ca/service");
     const ExpectTitle ="Trauma & Psychotherapy Services | Lasting Wellness Therapy";
     const currentTitle = await page.title();
     await expect (currentTitle).toBe(ExpectTitle);
     console.log("Expected title of service page:",ExpectTitle);
     console.log("current title of service page:", currentTitle);
    
     const pages =[
        {
            URl: 'https://www.lasting-wellness.ca/group',
            expectTItle: 'Therapy Groups & Workshops | Lasting Wellness Therapy'

        },
        {
            URl: 'https://www.lasting-wellness.ca/faq',
            expectTItle: 'Counselling FAQs | What to Expect | Lasting Wellness Therapy'

        },
        {
            URl: 'https://www.lasting-wellness.ca/contact ',
            expectTItle: 'Contact & Book a Consultation | Lasting Wellness Therapy'
        }
     ];
        for  (const p of pages)
        {
        await page.goto(p.URl);
        const currentTItle = await page.title();

        console.log("URL:" , p.URl);
        console.log("Expected Title:" , p.expectTItle);
        console.log("Current title:", currentTItle);
        await expect(currentTItle).toBe(p.expectTItle);
        }
}); 
