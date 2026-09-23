import {BasePage} from "./BasePage.js"

export class HomePage extends BasePage {

    constructor(page)

    {
        super(page)

            this.page = page;
            this.manage=page.getByText("Manage",{exact: true});
            this.manageCategoriesLink=page.getByText("Manage Categories");
            this.addNewCategory=page.getByText("Add New Category");

    }
            async manageClick()
            {
              await this.click(this.manage); 
            }

            async hoverOnManageCategories() 
            {
            await this.manageCategoriesLink.hover();
            }

            async manageCatagory()
            {
                await this.click(this.manageCategoriesLink)
            }
}
