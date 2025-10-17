import { config } from 'dotenv';
import { type Locator, type Page } from '@playwright/test';

config();

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

export class LoginPage {

    readonly page: Page
    readonly btnJobSeeker: Locator
    readonly inputEmail: Locator
    readonly inputPassword: Locator
    readonly btnSignIn: Locator

    constructor(page: Page){
        this.page = page;
        this.btnJobSeeker = page.getByText('Job seeker');
        this.inputEmail = page.getByLabel('Email');
        this.inputPassword = page.getByLabel('Password');
        this.btnSignIn = page.locator('button[type="submit"]');
    }

    async navigateTo() {
        await this.page.goto('/');
    }

    async clickJobSeeker(){
        await this.btnJobSeeker.isVisible();
        await this.btnJobSeeker.click();
    }

    async loginWithCredentials(){
        await this.inputEmail.isVisible();
        await this.inputEmail.fill(`${email}`);
        await this.inputPassword.fill(`${password}`);
        await this.btnSignIn.click();
    }
}