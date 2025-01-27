// cliente.model.ts
export interface Cliente {
    id_cliente: number;
    nombre_completo: string;
    direccion?: string;
    telefono?: string;
    email: string;
    id_tipo_cliente: number;
  }
  