# Playwright Testing Suite

## Overview
This repository contains a collection of Playwright tests designed to automate end-to-end testing for a hotel management system. These tests ensure the functionality, performance, and reliability of the web interface.

## Features
- End-to-end tests for rooms, clients, bills, and reservations.
- Uses [Faker.js](https://www.npmjs.com/package/@faker-js/faker) to randomize input data for robust testing.
- Manages environment variables securely using [dotenv](https://www.npmjs.com/package/dotenv).
- Dockerized setup to streamline the application environment for testing.

## Prerequisites
To run these tests, ensure the following:
- Node.js installed on your machine.
- Docker installed for running the test application.
- Environment variables managed via `.env` file.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MehmetAyaz35/assignment01-MehmetAyaz.git
   ```
2. **Navigate to the project directory**:

```bash
cd [directory-name]
 ```
3. **Install project dependencies**:

```bash
npm install
 ```
4. **Create a .env file in the root directory with the following content**:

```bash

BASE_URL=http://localhost:3000/
USERNAME=tester01
PASSWORD=GteteqbQQgSr88SwNExUQv2ydb7xuf8c
 ```
## Running the Application with Docker
1. **Build and run the Docker container to launch the application**:

2. **Verify that the application is running by visiting the URL set in your .env file (e.g., http://localhost:3000/).**

## Running the Tests
1. **Run the tests using Playwright’s Test Runner**:

```bash

npx playwright test
 ```
2. **To run specific tests interactively**:

```bash

npx playwright test --ui
 ```
3. **To run the tests with a specific browser (e.g., Chromium)**:

```bash

npx playwright test --browser=chromium
 ```
## Randomized Data with Faker.js
This test suite utilizes Faker.js to generate randomized test data, ensuring the robustness and variability of test cases. For example, client names, emails, and telephone numbers are all randomly generated.

## Environment Management with dotenv
We use the .env file to manage environment variables, such as BASE_URL, USERNAME, and PASSWORD. Ensure you define your environment variables correctly before running the tests.

Example .env File
```bash

BASE_URL=http://localhost:3000/
USERNAME=tester01
PASSWORD=GteteqbQQgSr88SwNExUQv2ydb7xuf8c
 ```
## Running with .env Variables
To ensure the tests run with the .env environment variables, you can execute the following command:

```bash

. .env
```
This command ensures your test file runs with the environment variables loaded from the .env file.
