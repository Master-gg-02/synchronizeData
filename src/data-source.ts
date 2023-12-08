import "reflect-metadata"
import { DataSource } from "typeorm"
// import { User } from "./entity/User"
// import { Photo } from "./entity/Photo"

export const AppDataSource = new DataSource({
    type: "mongodb",
    // database: "test",
    synchronize: true,
    logging: false,
    entities: [__dirname + "/entity/*.ts"],
    subscribers: [],
    migrations: [/*...*/],
    migrationsTableName: "custom_migration_table"
})