import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage{
  readonly page: Page;
  readonly pageHeading: Locator;
  readonly roomsViewButton: Locator;
  readonly clientsViewButton: Locator;
  readonly billsViewButton: Locator;
  readonly reservationsViewButton: Locator;
  readonly logoutButton: Locator;
  

  constructor (page: Page){
    this.page = page;
    this.pageHeading = page.getByRole('heading', { name: 'Tester Hotel Overview' });
    this.roomsViewButton = page.locator('div').filter({ hasText: /^RoomsNumber: 2View$/ }).getByRole('link');                        
    this.clientsViewButton= page.locator('div').filter({ hasText: /^ClientsNumber: 2View$/ }).getByRole('link');
    this.billsViewButton = page.locator('div').filter({ hasText: /^BillsTotal: 1 \(4500kr\)Paid: 0 \(0kr\)View$/ }).getByRole('link');
    this.reservationsViewButton = page.locator('div').filter({ hasText: /^ReservationsTotal: 1Current: 0View$/ }).getByRole('link');
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
  }

  async gotoRoomsView() {
    await this.roomsViewButton.click();
}

async gotoClientsView() {
    await this.clientsViewButton.click();
}

async gotoBillsView() {
    await this.billsViewButton.click();
}

async gotoReservationsView() {
    await this.reservationsViewButton.click();
}

async performLogout() {
    await this.logoutButton.click();
}


}