import { defineConfig, devices } from '@playwright/test';
import path from 'path';

export default defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,  //for full test
  expect:{
    timeout: 5000     //for assertions
  },

  reporter: [
  ['html', { outputFolder: 'playwright-report', open: 'never' }],
  //['allure-playwright', { outputFolder: 'allure-results' }]
],
  
  retries: 1, //retry failed tests 1 more time

  projects: [
    {
      name: 'chrome',
      use: {
        /* log */
        trace: 'retain-on-failure',

        /* set device */
        //...devices["iPhone 15 Plus"],

        /* ssl certification */
        ignoreHTTPSErrors: true,

        /* permissions */
        permissions: ['geolocation'],

        /* set browser */
        browserName: 'chromium',

        /* set headless mode */
        headless: false,

        /* maximizing window */
        launchOptions: {
          args: ["--start-maximized"],
        },
        viewport: null,

        /* screenshot and video */
        screenshot: 'only-on-failure', //on, off
        video: 'retain-on-failure', //on, off, on-first-retry
      }
    },
    {
      name: 'firefox',
      use: {
        /* log */
        trace: 'on-first-retry',

        /* set device */
        //...devices["iPhone 15 Plus"],

        /* ssl certification */
        ignoreHTTPSErrors: true,

        /* permissions */
        permissions: ['geolocation'],

        /* set browser */
        browserName: 'firefox',

        /* set headless mode */
        headless: true,

        /* maximizing window */
        launchOptions: {
          args: ["--start-maximized"],
        },
        viewport: null,

        /* screenshot and video */
        screenshot: 'only-on-failure', //on, off
        video: 'retain-on-failure', //on, off, on-first-retry
      }
    }
  ]
});