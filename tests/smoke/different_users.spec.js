import { test, expect } from '@playwright/test' ;
import { LoginPage } from '../../pages/LoginPage.js';
import {DashboardPage} from '../../pages/DashBoardPage.js'
import multiuser  from '../../testdata/allUsers.json'

test.describe('Data Driven Test for Login Scenarios' , {tags:['datadriven', 'login' ]}, () => {

for (const user of multiuser) 
    {

test(`login to application ${user.id}`, async ({page}) =>

    {

        await page.goto('/login');
        const loginPage = new LoginPage(page);

        console.log(`Test Data Used in This test ${user.username} and  ${user.password}`);

        await loginPage.loginToApplication(user.username, user.password);

        expect(await loginPage.getErrorMessage()).toBe(user.message);

       
    }
)
    }
}
)