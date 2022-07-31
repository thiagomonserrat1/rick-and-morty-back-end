import { DataSource } from "typeorm";

require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_END === "production"
      ? { rejectUnauthorized: false }
      : false,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PWD,
  database: process.env.POSTGRES_DB,

  synchronize: false,
  logging: true,
  entities:
    process.env.NODE_ENV === "production"
      ? ["dist/entities/*js"]
      : ["src/entities/*ts"],
  migrations:
    process.env.NODE_ENV === "production"
      ? ["dist/migrations/*.js"]
      : ["src/migrations/*.ts"],
});
