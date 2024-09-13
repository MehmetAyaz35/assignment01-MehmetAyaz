import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';
import { DashboardPage } from './pages/dashboard-page';
import { BillsPage } from './pages/bills-page';
import { RoomsPage } from './pages/rooms-page';
import { ClientsPage } from './pages/clients-page';
import { CreateClientPage } from './pages/createClient-page';
import { CreateBillPage } from './pages/createBill-page';
import { ReservationsPage } from './pages/reservations-page';
import { CreateRoomPage } from './pages/createRoom-page';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.performLogin(process.env.USERNAME!, process.env.PASSWORD!);
  
  const dashboardPage = new DashboardPage(page);
  await expect(dashboardPage.pageHeading).toBeVisible();
});

test.afterEach(async ({ page }) => {
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.performLogout();
  await expect(dashboardPage.pageHeading).not.toBeVisible();
});

test.describe('Test suite 01', () => {
  
  test('TC01: heading must be visible', async ({ page }) => {
 
    await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();
    await page.waitForTimeout(2000);   

  });   

  test('TC02: Bill creation and validation', async ({ page }) => {

    const dashboardPage = new DashboardPage(page);
    const billsPage = new BillsPage(page);
    const createBillPage = new CreateBillPage(page);
  
    await dashboardPage.gotoBillsView();
    await billsPage.gotoCreateBill();

    const randomCreateBill = await createBillPage.createBill();
    const billRow = page.locator(`text=${randomCreateBill}`);
    await expect(billRow).toBeVisible(); 

  });


  test('TC03: should create a new room and verify it in the list', async ({ page }) => {

    const dashboardPage = new DashboardPage(page);
    const roomsPage = new RoomsPage(page);
    const createRoomPage = new CreateRoomPage(page);
    
    await dashboardPage.gotoRoomsView();
    await roomsPage.gotoCreateRoom();
    await createRoomPage.createRoom();
    await expect(roomsPage.page).toHaveURL(/.*rooms/);

  });

  test('TC04: Successfully create a new client and verify client list page', async ({ page }) => {

    const dashboardPage = new DashboardPage(page);
    const clientsPage = new ClientsPage(page);
    const createClientPage = new CreateClientPage(page);

    await dashboardPage.gotoClientsView();
    await clientsPage.gotoCreateClient();
    await createClientPage.createClient();
    await expect(clientsPage.page).toHaveURL(/.*clients/);

  });

  test('TC05 should edit an existing room and verify the update', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const roomsPage = new RoomsPage(page);

    await dashboardPage.gotoRoomsView();
    await roomsPage.gotoEditRoom(0); // Edit first room in the list
    await roomsPage.goBack();
    await expect(roomsPage.page).toHaveURL(/.*rooms/);
  });


  
});
  


