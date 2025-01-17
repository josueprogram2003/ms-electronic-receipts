import { GuideTransportDto } from "../dto/guide-transport.dto";
import { GuideTransportEntity } from "../entity/guide-transport.entity";
import { GuideTransportNubefact } from "../interfaces/guide-transport-nubefact";

export abstract class GuideTransportDataSource {
  abstract save(
    guide_transport: GuideTransportDto
  ): Promise<GuideTransportEntity>;
  abstract delete(id: number): Promise<GuideTransportEntity>;
  abstract sendNubefact(
    grt: GuideTransportNubefact
  ): Promise<GuideTransportNubefact>;
}
