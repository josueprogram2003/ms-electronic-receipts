import { GuideTransportDetailDataSource } from "../../domain/datasource/guide-transport-detail.datasource";
import { GuideTransportDetailsEntity } from "../../domain/entity/guide-transport-details.entity";
import { GuideTransportDetailRepository } from "../../domain/repository/guide-transport-detail.repository";

export class GuideTransportDetailRepositoryImpl
  implements GuideTransportDetailRepository
{
  constructor(private readonly datasource: GuideTransportDetailDataSource) {}

  save(
    guide_transport_detail: GuideTransportDetailsEntity
  ): Promise<GuideTransportDetailsEntity> {
    return this.datasource.save(guide_transport_detail);
  }
  delete(id: number): Promise<GuideTransportDetailsEntity> {
    return this.datasource.delete(id);
  }
}
