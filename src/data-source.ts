import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mongodb",
    // database: "test",
    synchronize: true,
    logging: false,
    entities: [User],
    subscribers: [],
    migrations: [/*...*/],
    migrationsTableName: "custom_migration_table"
})