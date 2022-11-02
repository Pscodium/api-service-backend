import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Color } from "./entity/Color";
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [User, Color],
    migrations: [],
    subscribers: [],
});
