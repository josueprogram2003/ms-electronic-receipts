import { GuideTransportDetailsEntity } from "../entity/guide-transport-details.entity";

export abstract class GuideTransportDetailDataSource {
  abstract save(
    guide_transport_detail: GuideTransportDetailsEntity
  ): Promise<GuideTransportDetailsEntity>;
  abstract delete(id: number): Promise<GuideTransportDetailsEntity>;
}
