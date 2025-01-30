export interface LogisticaMaritima {
    id_logistica_maritima: number;
    id_producto: number;
    cantidad_producto: number;
    fecha_registro: string; // Formato ISO
    fecha_entrega: string; // Formato ISO
    id_puerto: number;
    precio_envio: number;
    precio_con_descuento: number;
    numero_flota: string;
    numero_guia: string;
  }
  