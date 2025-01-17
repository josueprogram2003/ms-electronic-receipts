import { GuideTransportDetailDataSource } from "../../domain/datasource/guide-transport-detail.datasource";
import { GuideTransportDetailsEntity } from "../../domain/entity/guide-transport-details.entity";
import { TypeOrm } from "../../plugins/database/mysql/typeorm.connection";

export class GuideTransportDetailDataSourceImpl
  implements GuideTransportDetailDataSource
{
  async save(
    guide_transport_detail: GuideTransportDetailsEntity
  ): Promise<GuideTransportDetailsEntity> {
    try {
      const datasource = TypeOrm.getRepository(GuideTransportDetailsEntity);
      return await datasource.save(guide_transport_detail);
    } catch (error) {
      throw error;
    }
  }
  async delete(id: number): Promise<GuideTransportDetailsEntity> {
    try {
      const datasource = TypeOrm.getRepository(GuideTransportDetailsEntity);
      const guideToDelete = await datasource.findOneBy({ id });
      if (!guideToDelete) {
        throw new Error(`La Guía con ID : ${id} no fue econtrada`);
      }
      await datasource.delete(id);
      return guideToDelete;
    } catch (error) {
      throw error;
    }
  }
}
