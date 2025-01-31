export interface Puerto {
    id_puerto: number;
    nombre: string;
    id_ubicacion: number;
    capacidad_recepcion: number;
  }

export interface PuertosResponse {
  status: string;
  message: string;
  data: Puerto[];
  }
export interface PuertoResponse {
  status: string;
  message: string;
  data: Puerto;
}
        