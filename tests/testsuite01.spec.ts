import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';
import { DashboardPage } from './pages/dashboard-page';
import { BillsPage } from './pages/bills-page';
import { RoomsPage } from './pages/rooms-page';
import { ClientsPage } from './pages/clients-page';

test.describe('Test suite 01', () => {
  test('Test case 01', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const billPage = new BillsPage(page);
    const roomPage = new RoomsPage(page);
    const clientPage = new ClientsPage(page);
    
    await loginPage.goto();
    await loginPage.performLogin(`${process.env.USERNAME}`,`${process.env.PASSWORD}`)
    await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();

    await dashboardPage.gotoClientsView();
    await page.locator('.action').first().click();
    await 

    // await page.locator('#app > div > div > div:nth-child(1) > a').click();
    // await page.locator('div').filter({ hasText: /RoomsNumber: \d+View/ }).getByRole('link').click();

    // await page.locator('div').filter({ hasText: /^RoomsNumber: 1View$/ }).getByRole('link').click();
    // await page.locator('div').filter({ hasText: 'RoomsNumber: \\d+/)' }).getByRole('link', { name: 'View' }).click();
    // 'RoomsNumber: \d+' dinamik metni ile View düğmesini seçin
// await page.locator('div:has-text(/RoomsNumber: \\d+/)').getByRole('link', { name: 'View' }).click();
// 'RoomsNumber: \d+' dinamik metni ile View düğmesini seçin
    // await page.locator('div:has-text(/RoomsNumber: \\d+/)').getByRole('link', { name: 'View' }).click();



    // await page.locator('a:has-text(/RoomsNumber: \\d+View/)').click();

    // await page.getByRole('img').first().click();

  //  await dashboardPage.gotoBillsView();
    await page.waitForTimeout(2000);   
  });   
});
