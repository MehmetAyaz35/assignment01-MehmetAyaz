import { expect, type Locator, type Page } from '@playwright/test';

export class RoomsPage{
    readonly page: Page;
    readonly pageHeading: Locator;
    readonly createRoomButton: Locator;
    readonly roomKebabMenuButtons: Locator;
    readonly editRoomOption: Locator;
    readonly deleteRoomOption: Locator;
    readonly backButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.pageHeading = page.getByText('Rooms');
        this.createRoomButton  = page.getByRole('link', { name: 'Create Room' });
        this.roomKebabMenuButtons  = page.getByRole('img');
        this.editRoomOption  = page.getByText('Edit');
        this.deleteRoomOption  = page.getByText('Delete');
        this.backButton  = page.getByRole('link', { name: 'Back' });
    }

    async gotoCreateRoom(){
        await this.createRoomButton.click();
    }

    async gotoEditRoom(index: number){
        await this.roomKebabMenuButtons.nth(index).click();
        await this.editRoomOption.click();
    }

    async deleteRoom(index: number){
        await this.roomKebabMenuButtons.nth(index).click();
        await this.deleteRoomOption.click();
    }

    async goBack(){
        await this.backButton.click();
    }

} 
