import { Router } from "express";
import { GuideTransportRoutes } from "./guide-transport/guide-transport.routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use("/api/guide_transport", GuideTransportRoutes.routes);
    return router;
  }
}
