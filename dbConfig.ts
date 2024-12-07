import { Admin } from "src/Entities/Admin.entity";
import { Participer } from "src/Entities/Participer.entity";
import { Project } from "src/Entities/Project.entity";
import { User } from "src/Entities/User.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";


export const dbConfig : PostgresConnectionOptions = {
    host: 'localhost',
    port : 5432,
    username : 'postgres',
    password : 'root',
    database : 'teamTaskManager',
    type : 'postgres',
    entities : [Admin ,User ,Participer ,Project],
    synchronize : true,
};