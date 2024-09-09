import { expect, type Locator, type Page } from '@playwright/test';


export class BillPage {

    readonly page: Page;
    readonly pageTitle: Locator;
    readonly billOptionsButton: Locator;
    readonly editBillButton: Locator;
    readonly deleteBillButton: Locator;
    readonly backButton: Locator;


constructor(page: Page){
    this.page = page;
    this.pageTitle = page.getByText('Bills');
    this.billOptionsButton = page.getByRole('img').first();
    this.editBillButton = page.getByText('Edit');
    this.deleteBillButton = page.getByText('Delete');
    this.backButton = page.getByRole('link', { name: 'Back' });
}

async gotoEditBill(){
    await this.billOptionsButton.click();
    await this.editBillButton.click();
}

async deleteBill(){
    await this.billOptionsButton.click();
    await this.deleteBillButton.click();
}

async goBackFromBillView(){
    await this.backButton.click();
}
}

