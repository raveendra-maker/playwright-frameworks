import { test as base } from '@playwright/test';

import {LoginPage} from '../pages/LoginPage.js';

import {DashboardPage} from '../pages/DashboardPage.js';


export const test=base.extend({


       loginPage:async ({page},use)=>
       {

            console.log('Inside loginPage fixture');

            const loginPage = new LoginPage(page);

            await use(loginPage);

            console.log('Exiting loginPage fixture');

       }
       ,
       dashboardPage:async ({page},use)=>
       {

            console.log('Inside Dashboard fixture');

            const dashboardPage = new DashboardPage(page);

            await use(dashboardPage);

            console.log('Exiting Dashboard fixture');

       }
        

});

export { expect } from '@playwright/test';