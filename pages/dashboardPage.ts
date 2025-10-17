import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage {

    readonly page: Page
    readonly btnGoToDashboard: Locator
    readonly dashboardTitle: Locator
    readonly btnAddPayoutMethod: Locator
    
    constructor(page: Page){
        this.page = page;
        this.btnGoToDashboard = page.getByText('Go to dashboard');
        this.dashboardTitle = page.getByText('Dashboard');
        this.btnAddPayoutMethod = page.getByTestId('action-card-button');
    }

    async goToDashboard(){
        await this.btnGoToDashboard.isVisible();
        await this.btnGoToDashboard.click();
        await this.dashboardTitle.isVisible();
    }

    async addPayoutMethod() {
        await this.btnAddPayoutMethod.isVisible();
        await this.btnAddPayoutMethod.click();
    }
}