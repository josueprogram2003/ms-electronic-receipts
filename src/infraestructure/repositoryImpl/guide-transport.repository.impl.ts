import { GuideTransportDataSource } from "../../domain/datasource/guide-transport.datasource";
import { GuideTransportDto } from "../../domain/dto/guide-transport.dto";
import { GuideTransportEntity } from "../../domain/entity/guide-transport.entity";
import { GuideTransportNubefact } from "../../domain/interfaces/guide-transport-nubefact";
import { GuideTransportRepository } from "../../domain/repository/guide-transport.repository";

export class GuideTransportRepositoryImpl implements GuideTransportRepository {
  constructor(private readonly datasource: GuideTransportDataSource) {}
  sendNubefact(grt: GuideTransportNubefact): Promise<GuideTransportNubefact> {
    return this.datasource.sendNubefact(grt);
  }

  save(guide_transport: GuideTransportDto): Promise<GuideTransportEntity> {
    return this.datasource.save(guide_transport);
  }
  delete(id: number): Promise<GuideTransportEntity> {
    return this.datasource.delete(id);
  }
}
