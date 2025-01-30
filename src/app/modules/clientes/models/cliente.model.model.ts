// cliente.model.ts
export interface Cliente {
    id_cliente: number;
    nombre_completo: string;
    direccion?: string;
    telefono?: string;
    email: string;
    id_tipo_cliente: number;
  }
  
  export interface ClientesResponse {
    status: string;
    message: string;
    data: Cliente[];
  }

  export interface ClienteResponse {
    status: string;
    message: string;
    data: Cliente;
  }
  