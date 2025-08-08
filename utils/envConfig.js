require('dotenv').config();

const ENV = process.env.ENV || 'dev';

const allConfigs = {
  dev: {
    baseURL: 'https://rahulshettyacademy.com/client/#/auth/login',
    username: process.env.DEV_USER,
    password: process.env.DEV_PASS
  },
  staging: {
    baseURL: 'https://rahulshettyacademy.com/client/#/auth/login',
    username: process.env.STAGE_USER,
    password: process.env.STAGE_PASS
  },
  prod: {
    baseURL: 'https://rahulshettyacademy.com/client/#/auth/login',
    username: process.env.PROD_USER,
    password: process.env.PROD_PASS
  }
};

module.exports = allConfigs[ENV];