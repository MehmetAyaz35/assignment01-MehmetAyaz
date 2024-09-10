import { expect, type Locator, type Page } from "@playwright/test";

export class ClientsPage {
  readonly page: Page;
  readonly pageHeading: Locator;
  readonly creatClientButton: Locator;
  readonly clientKebabMenuButton: Locator;
  readonly editClientOption: Locator;
  readonly deleteClientOption: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageHeading = page.getByText("Clients");
    this.creatClientButton = page.getByRole("link", { name: "Create Client" });
    this.clientKebabMenuButton = page.getByRole("img").first();
    this.editClientOption = page.getByText("Edit");
    this.deleteClientOption = page.getByText("Edit");
    this.backButton = page.getByRole("link", { name: "Back" });
  }

  async createClient() {
    await this.creatClientButton.click();
  }

  async editClient() {
    await this.clientKebabMenuButton.click();
    await this.editClientOption.click();
  }

  async deleteClient() {
    await this.clientKebabMenuButton.click();
    await this.deleteClientOption.click();
  }
}
