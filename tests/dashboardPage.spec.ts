import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboardPage';
import { LoginPage } from '../pages/loginPage';
import { assert } from 'console';

test('validate access to payout method', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.navigateTo();
    await loginPage.clickJobSeeker();
    await loginPage.loginWithCredentials();

    await dashboardPage.goToDashboard();
    await dashboardPage.addPayoutMethod();
    expect(await page.url()).toBe('https://www.app.athyna.com/settings?action=addPayout');
});