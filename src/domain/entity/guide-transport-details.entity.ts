import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { GuiaTransportistaDetalle } from "../interfaces/guide-transport-details";

@Entity("guia_transportista_detalle")
export class GuideTransportDetailsEntity implements GuiaTransportistaDetalle {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: "int" })
  idGuiaTransportista: number;
  @Column({ type: "text" })
  codUnidadMedida: string;
  @Column({ type: "int" })
  cantidad: number;
  @Column({ type: "text" })
  codigo: string;
  @Column({ type: "text" })
  descripcion: string;
  @Column({ type: "int" })
  peso: number;

  constructor(data: Partial<GuiaTransportistaDetalle> = {}) {
    this.id = data.id!;
    this.idGuiaTransportista = data.idGuiaTransportista!;
    this.codUnidadMedida = data.codUnidadMedida!;
    this.cantidad = data.cantidad!;
    this.codigo = data.codigo!;
    this.descripcion = data.descripcion!;
    this.peso = data.peso!;
  }
}
