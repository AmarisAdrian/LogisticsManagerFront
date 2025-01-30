export interface Producto {
    id_producto: number;
    nombre: string;
    descripcion?: string;
    id_tipo_producto: number;
    fecha_creacion: string;
    nombre_tipo_producto?: string;
  }

    export interface ProductosResponse {
      status: string;
      message: string;
      data: Producto[];
    }
  
    export interface ProductosResponse {
      status: string;
      message: string;
      data: Producto[];
    }
     export interface ProductoResponse {
        status: string;
        message: string;
        data: Producto;
      }
      
    
  