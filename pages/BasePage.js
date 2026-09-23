import test from '@playwright/test';

export class BasePage {
    constructor(page) {
        this.page = page;
    }

   
    async getText(selector) {
        return await selector.textContent();
    }

    async type(selector, text) {

        await selector.fill(text);
        console.log(`****** type performed with value: ${text}*******`);
    }

async click(selector) { 
    await selector.click(); 
    console.log(`****** click performed with value: ${selector}*******`);
}

 async navigateToApplication(url) {
        await this.page.goto(url);
        console.log(`****** Navigated to application with url: ${url}*******`);
    }


async uploadFiles(selector, filePath) {
    await selector.setInputFiles(selector, filePath);
    console.log(`****** File uploaded with path: ${filePath}*******`);


}



















}