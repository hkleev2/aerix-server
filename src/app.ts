import 'reflect-metadata';
import config from './config';
import { app as expressApp } from './loader/express';
import { connection as typeormConnection } from './loader/typeorm';

async function run(): Promise<void> {
  await typeormConnection();

  expressApp.listen(config.expressPort, () => {
    console.log(`express start at ${config.expressPort}`);
  });
}

run();
