import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard';
import { LoginPage } from '../pages/login';


test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateTo();
    await loginPage.clickJobSeeker();
    await loginPage.loginWithCredentials();
});


test('validate login with registered job seeker using credentials', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.goToDashboard();
});
    

test('validate access to payout method', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);

    await dashboardPage.goToDashboard();
    await dashboardPage.addPayoutMethod();
    await page.waitForLoadState('load');
    expect(await page.url()).toBe('https://www.app.athyna.com/settings?action=addPayout');
});