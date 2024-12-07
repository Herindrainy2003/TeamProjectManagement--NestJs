import { Project } from "src/Entities/Project/project.entity";
import { User } from "src/Entities/User/User.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";


export const dbConfig : PostgresConnectionOptions = {
    host : 'localhost',
    port : 5432,
    username : 'postgres',
    password : 'root',
    database : 'postgres',
    type : 'postgres',
    entities : [User ,Project],
    synchronize : true,
}