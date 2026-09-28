import {BasePage} from "./BasePage.js"
import {expect} from "@playwright/test";
export class CategoriesPage extends BasePage 
{

    constructor(page)
    {
        super(page)

        this.page = page;
        //this.addNewCategory= page.getByText("Add New Category");
        this.manageCategories=page.getByText("Manage Categories");
    }
     
    async manageCategoriesFlow()
    {
        const newTab = this.page.context().waitForEvent("page");
        await this.click(this.manageCategories);
        const newPage = await newTab;
        await newPage.waitForLoadState();

        const addNewCategory = newPage.getByText("Add New Category");
        await addNewCategory.click();
        const row = newPage.locator("//td[text()='Rag_chint']");    
        newPage.on("dialog", async (alert) => 
        {
            const msg = alert.message();
            console.log("The alert message is: " + msg);
            expect(msg).toBe("Enter a Category Name");
            await alert.accept("Rag_chint");
        });
        await addNewCategory.click();
        await expect(row).toContainText("Rag_chint", { timeout: 5000 });
        await newPage.locator("//td[text()='Rag_chint']//following::button[1]").click();
        //await newPage.locator("//button[text()='Delete']").click(); 
    }

}
