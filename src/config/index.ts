import dotenvFlow from 'dotenv-flow';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

console.log(`NODE_ENV = ${process.env.NODE_ENV}`);

dotenvFlow.config();

export default {
  expressPort: parseInt(process.env.EXPRESS_PORT || '8080', 10),
  db: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: process.env.DB_LOGGING === 'true',
    sync: true,
    dropSchema: true,
  },
};
