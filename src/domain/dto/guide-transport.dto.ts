import { GuideTransport } from "../interfaces/guide-transport";

export class GuideTransportDto implements GuideTransport {
  id?: number | undefined;
  fecha: Date;
  fecha_sistema: Date;
  serie: string;
  numero: string;
  id_empresa: number;
  fl_estado: number;
  motivo_anulacion?: string | undefined;
  id_local: number;
  id_usuario: number;
  fecha_traslado?: Date | undefined;
  fl_guia_interna?: number | undefined;
  id_programacion_viaje?: number | undefined;
  nota?: string | undefined;
  respuesta_api?: string | undefined;
  estado?: string | undefined;
  json_api?: string | undefined;
  id_motivo_traslado?: number | undefined;
  id_orden?: number | undefined;
  fl_finalizado?: number | undefined;
  id_desembarque?: number | undefined;
  fl_multiple_viaje?: number | undefined;
  id_reparto?: bigint | undefined;
  enlace?: string | undefined;
  estadoSunat?: string | undefined;
  sunatDescription?: string | undefined;
  sunatNote?: string | undefined;
  sunatResponseCode?: string | undefined;
  sunatSoapError?: string | undefined;
  codigoQr?: string | undefined;
  nubefactError?: string | undefined;
  isElectronic?: string | undefined;
  pesoTotal?: number | undefined;
  id_remitente?: number | undefined;
  id_destinatario?: number | undefined;
  id_ubigeo_partida?: string | undefined;
  id_ubigeo_llegada?: string | undefined;
  punto_partida?: string | undefined;
  punto_llegada?: string | undefined;
  documento_relacionado_guiaremitente?: string | undefined;
  sunat_envio_indicador?: string | undefined;
  idSubcontratista?: number | undefined;
  idPagadorFlete?: number | undefined;
  pesoBrutoUnidadMedida?: string | undefined;
  nubefactResponseCode?: string | undefined;
  nubefactNotaImportante?: string | undefined;

  constructor(data: Partial<GuideTransportDto> = {}) {
    this.id = data.id;
    this.fecha = data.fecha || new Date();
    this.fecha_sistema = data.fecha_sistema || new Date();
    this.serie = data.serie || "";
    this.numero = data.numero || "";
    this.id_empresa = data.id_empresa || 0;
    this.fl_estado = data.fl_estado || 0;
    this.id_local = data.id_local || 0;
    this.id_usuario = data.id_usuario || 0;
    this.motivo_anulacion = data.motivo_anulacion;
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

  validate(): void {
    if (!this.fecha) throw new Error("El campo 'fecha' es obligatorio.");
    if (!this.fecha_sistema)
      throw new Error("El campo 'fecha_sistema' es obligatorio.");
    if (!this.serie) throw new Error("El campo 'serie' es obligatorio.");
    if (!this.numero) throw new Error("El campo 'numero' es obligatorio.");
    if (!this.id_empresa)
      throw new Error("El campo 'id_empresa' es obligatorio.");
    if (!this.fl_estado)
      throw new Error("El campo 'fl_estado' es obligatorio.");
    if (!this.id_local) throw new Error("El campo 'id_local' es obligatorio.");
    if (!this.id_usuario)
      throw new Error("El campo 'id_usuario' es obligatorio.");

    if (typeof this.fl_estado !== "number" || this.fl_estado < 0) {
      throw new Error("El campo 'fl_estado' debe ser un número positivo.");
    }

    if (typeof this.id_empresa !== "number" || this.id_empresa < 0) {
      throw new Error("El campo 'id_empresa' debe ser un número positivo.");
    }
  }
}
