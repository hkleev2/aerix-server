import { createConnection, Connection } from 'typeorm';

import config from '../config';

export function connection(): Promise<Connection> {
  return createConnection({
    type: 'mysql',
    host: config.db.host,
    port: config.db.port,
    username: config.db.username,
    password: config.db.password,
    database: config.db.database,
    entities: ['src/entity/**/*.ts'],
    synchronize: config.db.sync,
    logging: config.db.logging,
    dropSchema: config.db.dropSchema,
  });
}
