// require("dotenv").config();
import dotenv from 'dotenv';

dotenv.config();
// dotenv.config();

export const configuration = {
  client: "pg",
  connection: process.env.DATABASE_CONNECTION_STRING, 
   migrations: {
    tableName: 'migrations',
    directory: 'src/migrations'
    // stub: './stub/migration.stub'
  },
  seeds: {
    directory: './seeds',
    stub: './stub/seed.stub'
  }
};
