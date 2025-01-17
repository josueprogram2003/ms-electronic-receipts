import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { GuideTransport } from "../interfaces/guide-transport";

@Entity("guia_transportista")
export class GuideTransportEntity implements GuideTransport {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: "date" })
  fecha: Date;

  @Column({ type: "date" })
  fecha_sistema: Date;

  @Column({ type: "varchar", length: 50 })
  serie: string;

  @Column({ type: "varchar", length: 50 })
  numero: string;

  @Column()
  id_empresa: number;

  @Column()
  fl_estado: number;

  @Column({ type: "text", nullable: true })
  motivo_anulacion?: string;

  @Column()
  id_local: number;

  @Column()
  id_usuario: number;

  @Column({ type: "date", nullable: true })
  fecha_traslado?: Date;

  @Column({ type: "int", nullable: true })
  fl_guia_interna?: number;

  @Column({ type: "int", nullable: true })
  id_programacion_viaje?: number;

  @Column({ type: "text", nullable: true })
  nota?: string;

  @Column({ type: "text", nullable: true })
  respuesta_api?: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  estado?: string;

  @Column({ type: "text", nullable: true })
  json_api?: string;

  @Column({ type: "int", nullable: true })
  id_motivo_traslado?: number;

  @Column({ type: "int", nullable: true })
  id_orden?: number;

  @Column({ type: "int", nullable: true })
  fl_finalizado?: number;

  @Column({ type: "int", nullable: true })
  id_desembarque?: number;

  @Column({ type: "int", nullable: true })
  fl_multiple_viaje?: number;

  @Column({ type: "bigint", nullable: true })
  id_reparto?: bigint;

  @Column({ type: "text", nullable: true })
  enlace?: string;

  @Column({ type: "varchar", length: 50, nullable: true })
  estadoSunat?: string;

  @Column({ type: "text", nullable: true })
  sunatDescription?: string;

  @Column({ type: "text", nullable: true })
  sunatNote?: string;

  @Column({ type: "varchar", length: 10, nullable: true })
  sunatResponseCode?: string;

  @Column({ type: "text", nullable: true })
  sunatSoapError?: string;

  @Column({ type: "text", nullable: true })
  codigoQr?: string;

  @Column({ type: "text", nullable: true })
  nubefactError?: string;

  @Column({ type: "varchar", length: 10, nullable: true })
  isElectronic?: string;

  @Column({ type: "decimal", nullable: true })
  pesoTotal?: number;

  @Column({ type: "int", nullable: true })
  id_remitente?: number;

  @Column({ type: "int", nullable: true })
  id_destinatario?: number;

  @Column({ type: "varchar", length: 10, nullable: true })
  id_ubigeo_partida?: string;

  @Column({ type: "varchar", length: 10, nullable: true })
  id_ubigeo_llegada?: string;

  @Column({ type: "text", nullable: true })
  punto_partida?: string;

  @Column({ type: "text", nullable: true })
  punto_llegada?: string;

  @Column({ type: "text", nullable: true })
  documento_relacionado_guiaremitente?: string;

  @Column({ type: "varchar", length: 10, nullable: true })
  sunat_envio_indicador?: string;

  @Column({ type: "int", nullable: true })
  idSubcontratista?: number;

  @Column({ type: "int", nullable: true })
  idPagadorFlete?: number;

  @Column({ type: "varchar", length: 10, nullable: true })
  pesoBrutoUnidadMedida?: string;

  @Column({ type: "varchar", length: 10, nullable: true })
  nubefactResponseCode?: string;

  @Column({ type: "text", nullable: true })
  nubefactNotaImportante?: string;

  constructor(data: Partial<GuideTransport> = {}) {
    this.id = data.id;
    this.fecha = data.fecha!;
    this.fecha_sistema = data.fecha_sistema!;
    this.serie = data.serie!;
    this.numero = data.numero!;
    this.id_empresa = data.id_empresa!;
    this.fl_estado = data.fl_estado!;
    this.motivo_anulacion = data.motivo_anulacion;
    this.id_local = data.id_local!;
    this.id_usuario = data.id_usuario!;
    this.fecha_traslado = data.fecha_traslado;
    this.fl_guia_interna = data.fl_guia_interna;
    this.id_programacion_viaje = data.id_programacion_viaje;
    this.nota = data.nota;
    this.respuesta_api = data.respuesta_api;
    this.estado = data.estado;
    this.json_api = data.json_api;
    this.id_motivo_traslado = data.id_motivo_traslado;
    this.id_orden = data.id_orden;
    this.fl_finalizado = data.fl_finalizado;
    this.id_desembarque = data.id_desembarque;
    this.fl_multiple_viaje = data.fl_multiple_viaje;
    this.id_reparto = data.id_reparto;
    this.enlace = data.enlace;
    this.estadoSunat = data.estadoSunat;
    this.sunatDescription = data.sunatDescription;
    this.sunatNote = data.sunatNote;
    this.sunatResponseCode = data.sunatResponseCode;
    this.sunatSoapError = data.sunatSoapError;
    this.codigoQr = data.codigoQr;
    this.nubefactError = data.nubefactError;
    this.isElectronic = data.isElectronic;
    this.pesoTotal = data.pesoTotal;
    this.id_remitente = data.id_remitente;
    this.id_destinatario = data.id_destinatario;
    this.id_ubigeo_partida = data.id_ubigeo_partida;
    this.id_ubigeo_llegada = data.id_ubigeo_llegada;
    this.punto_partida = data.punto_partida;
    this.punto_llegada = data.punto_llegada;
    this.documento_relacionado_guiaremitente =
      data.documento_relacionado_guiaremitente;
    this.sunat_envio_indicador = data.sunat_envio_indicador;
    this.idSubcontratista = data.idSubcontratista;
    this.idPagadorFlete = data.idPagadorFlete;
    this.pesoBrutoUnidadMedida = data.pesoBrutoUnidadMedida;
    this.nubefactResponseCode = data.nubefactResponseCode;
    this.nubefactNotaImportante = data.nubefactNotaImportante;
  }
}
