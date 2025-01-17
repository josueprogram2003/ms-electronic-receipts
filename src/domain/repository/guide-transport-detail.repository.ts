import { GuideTransportDetailsEntity } from "../entity/guide-transport-details.entity";

export abstract class GuideTransportDetailRepository {
  abstract save(
    guide_transport_detail: GuideTransportDetailsEntity
  ): Promise<GuideTransportDetailsEntity>;
  abstract delete(id: number): Promise<GuideTransportDetailsEntity>;
}
