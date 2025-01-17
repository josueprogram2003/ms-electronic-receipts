import { DataSource } from "typeorm";
import { envs } from "../../env-var/envs";
import path from "path";

const entitiesPath = path.join("src/domain/entity/*.ts");
export const TypeOrm = new DataSource({
  type: "mysql",
  host: envs.HOST ?? "NULL",
  port: 3306,
  username: envs.USER ?? "NULL",
  password: envs.PASSWORD ?? "NULL",
  database: envs.DATABASE ?? "NULL",
  entities: [entitiesPath],
  synchronize: false,
  dropSchema: false,
  logging: true,
});
