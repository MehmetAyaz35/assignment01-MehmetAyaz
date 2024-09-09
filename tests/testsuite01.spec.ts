import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';
import { DashboardPage } from './pages/dashboard-page';
import { BillPage } from './pages/bills-page';

test.describe('Test suite 01', () => {
  test('Test case 01', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const billPage = new BillPage(page);

    await loginPage.goto();
    await loginPage.performLogin(`${process.env.USERNAME}`,`${process.env.PASSWORD}`)
    await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();


   await dashboardPage.gotoBillsView();
    await page.waitForTimeout(2000);   
  });   
});
