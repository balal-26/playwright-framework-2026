import {test as base} from '@playwright/test';

import { LoginPage } from '../pages/LoginPage.js';   

import { DashboardPage } from '../pages/DashboardPage.js';  


export const test = base.extend({   
    loginPage: async ({ page }, use) => {
        console.log(`Inside loginPage fixture`);
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
,
     dashboardPage: async ({ page }, use) => {
        console.log(`Inside dashboardPage fixture`);
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    }
});

export { expect } from '@playwright/test';


