import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Color } from "./entity/Color";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "Users",
    synchronize: true,
    logging: false,
    entities: [User, Color],
    migrations: [],
    subscribers: [],
});
