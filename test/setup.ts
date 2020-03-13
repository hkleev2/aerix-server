import 'reflect-metadata';
import { Connection } from 'typeorm';
import { app as expressApp } from '../src/loader/express';
import { connection as typeormConnection } from '../src/loader/typeorm';
import config from '../src/config';
export const app = expressApp;

const runExpressServer = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    expressApp.listen(config.expressPort, () => {
      resolve();
    });
  });
};

let connection: Connection;

before(async function() {
  this.timeout(30000);
  connection = await typeormConnection();
  await runExpressServer();
  console.log('Global setup done');
});

after(async function() {
  this.timeout(30000);
  await connection.dropDatabase();
  console.log('Global teardown done');
});
