import { envs } from "./plugins/env-var/envs";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

(() => {
  main();
})();

function main() {
  const server = new Server(envs.PORT, AppRoutes.routes);
  server.run();
}
