import {BasePage} from "./BasePage"

export class HomePage extends BasePage
{

    constructor(page)
    {
    super(page);
    this.page=page;
    this.manage=page.getByText("Manage",{ exact: true });
    this.manageCategories=page.getByText("Manage Categories");
    
    }
    async manageClick()
    {
        await this.click(this.manage);
    }

    async hoverOnManageCategories() 
    {
    await this.manageCategories.hover();
    }

    async manageCategoriesLink()
    {
        await this.click(this.manageCategories);
    }


}