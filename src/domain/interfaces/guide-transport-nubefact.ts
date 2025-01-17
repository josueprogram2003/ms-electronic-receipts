interface NubefactItem {
  unidad_de_medida: string;
  codigo: string;
  descripcion: string;
  cantidad: string;
}

interface DocumentoRelacionado {
  tipo: string;
  serie: string;
  numero: string;
}

interface VehiculoSecundario {
  placa_numero: string;
  tuc: string;
}

interface ConductorSecundario {
  documento_tipo: string;
  documento_numero: string;
  nombre: string;
  apellidos: string;
  numero_licencia: string;
}

export interface GuideTransportNubefact {
  operacion: string;
  tipo_de_comprobante: number;
  serie: string;
  numero: number;
  cliente_tipo_de_documento: number;
  cliente_numero_de_documento: string;
  cliente_denominacion: string;
  cliente_direccion: string;
  cliente_email?: string;
  cliente_email_1?: string;
  cliente_email_2?: string;
  fecha_de_emision: string;
  observaciones?: string;
  peso_bruto_total: string;
  peso_bruto_unidad_de_medida: string;
  fecha_de_inicio_de_traslado: string;
  transportista_placa_numero: string;
  conductor_documento_tipo: string;
  conductor_documento_numero: string;
  conductor_nombre: string;
  conductor_apellidos: string;
  conductor_numero_licencia: string;
  destinatario_documento_tipo: string;
  destinatario_documento_numero: string;
  destinatario_denominacion: string;
  punto_de_partida_ubigeo: string;
  punto_de_partida_direccion: string;
  punto_de_partida_codigo_establecimiento_sunat: string;
  punto_de_llegada_ubigeo: string;
  punto_de_llegada_direccion: string;
  punto_de_llegada_codigo_establecimiento_sunat: string;
  enviar_automaticamente_al_cliente: string;
  formato_de_pdf?: string;
  items: NubefactItem[];
  documento_relacionado: DocumentoRelacionado[];
  vehiculos_secundarios?: VehiculoSecundario[];
  conductores_secundarios?: ConductorSecundario[];
}
