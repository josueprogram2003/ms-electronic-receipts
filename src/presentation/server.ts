import express, { Router } from "express";
import { TypeOrm } from "../plugins/database/mysql/typeorm.connection";

export class Server {
  private app = express();
  private port = 2000;
  private db = TypeOrm;
  private routes: Router;

  constructor(port: number, router: Router) {
    this.port = port;
    this.routes = router;
  }

  async run() {
    try {
      await this.db.initialize();
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: true }));
      this.app.use(this.routes);
      this.app.listen(this.port, () => {
        console.log("servidor corriendo en el puerto: " + this.port);
      });
    } catch (error) {
      console.error(error);
    }
  }
}
