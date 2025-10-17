import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from '../pages/dashboardPage';

test('1. validate login with registered job seeker using credentials. ', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.navigateTo();
    await loginPage.clickJobSeeker();
    await loginPage.loginWithCredentials();

    await dashboardPage.goToDashboard();
});