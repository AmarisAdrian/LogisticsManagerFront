export interface LogisticaTerrestre {
    id_logistica_terrestre: number;
    id_producto: number;
    cantidad_producto: number;
    fecha_registro: string; // Formato ISO
    fecha_entrega: string; // Formato ISO
    id_bodega: number;
    precio_envio: number;
    precio_con_descuento: number;
    placa_vehiculo: string;
    numero_guia: string;
  }