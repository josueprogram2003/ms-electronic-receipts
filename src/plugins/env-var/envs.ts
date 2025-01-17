import "dotenv/config";
import { get } from "env-var";

export const envs = {
  PORT: get("PORT").required().asPortNumber(),
  USER: get("USER").asString(),
  PASSWORD: get("PASSWORD").asString(),
  DATABASE: get("DATABASE").asString(),
  HOST: get("HOST").asString(),
  API_NUBEFACT: get("API_NUBEFACT").asString(),
  TOKEN_NUBEFACT: get("TOKEN_NUBEFACT").asString(),
};
