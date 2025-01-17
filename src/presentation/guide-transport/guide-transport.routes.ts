import { Router } from "express";
import { GuideTransportDataSourceImpl } from "../../infraestructure/datasourceImpl/guide-transport.datasource.impl";
import { GuideTransportRepositoryImpl } from "../../infraestructure/repositoryImpl/guide-transport.repository.impl";
import { GuideTransportController } from "./guide-transport.controller";
import { asyncHandler } from "../../middleware/async-handler";

export class GuideTransportRoutes {
  static get routes(): Router {
    const router = Router();
    const guideDataSource = new GuideTransportDataSourceImpl();
    const guideRepository = new GuideTransportRepositoryImpl(guideDataSource);
    const controller = new GuideTransportController(guideRepository);

    router.post("/save", asyncHandler(controller.save));
    router.delete("/delete/:id", asyncHandler(controller.delete));
    router.post("/send-nubefact", asyncHandler(controller.sendNubefact));

    return router;
  }
}
