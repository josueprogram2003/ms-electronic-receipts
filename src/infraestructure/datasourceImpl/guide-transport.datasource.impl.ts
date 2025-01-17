import { GuideTransportDataSource } from "../../domain/datasource/guide-transport.datasource";
import { GuideTransportDto } from "../../domain/dto/guide-transport.dto";
import { GuideTransportEntity } from "../../domain/entity/guide-transport.entity";
import { GuideTransportNubefact } from "../../domain/interfaces/guide-transport-nubefact";
import { TypeOrm } from "../../plugins/database/mysql/typeorm.connection";
import { nubefact } from "../../plugins/nubefact/nubefact";

export class GuideTransportDataSourceImpl implements GuideTransportDataSource {
  sendNubefact(grt: GuideTransportNubefact): Promise<GuideTransportNubefact> {
    return nubefact.saveGRT(grt);
  }

  async save(
    guide_transport: GuideTransportDto
  ): Promise<GuideTransportEntity> {
    try {
      const datasource = TypeOrm.getRepository(GuideTransportEntity);
      const newGuide = await datasource.save(guide_transport);
      return new GuideTransportEntity(newGuide);
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number): Promise<GuideTransportEntity> {
    try {
      const datasource = TypeOrm.getRepository(GuideTransportEntity);
      const guideToDelete = await datasource.findOneBy({ id });
      if (!guideToDelete) {
        throw new Error(`La Guía con ID : ${id} no fue econtrada`);
      }
      await datasource.delete(id);
      return new GuideTransportEntity(guideToDelete);
    } catch (error) {
      throw error;
    }
  }
}
