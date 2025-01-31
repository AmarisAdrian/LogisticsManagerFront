import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { Router,RouterModule } from '@angular/router';
import { Producto } from '../../../productos/models/productos.model.model';
import { LogisticaMaritima } from '../../../logistica-maritima/models/logistica-marina.model.model';
import { ProductosService } from '../../../productos/services/productos.service';
import { PuertosService } from '../../../puertos/services/puertos.service'

@Component({
  standalone: true, 
  selector: 'app-logistica-maritima-list',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './logistica-maritima-list.component.html',
  styleUrl: './logistica-maritima-list.component.css'
})
export class LogisticaMaritimaListComponent {
  producto: Producto = {
    id_producto: 0, 
    nombre: '',
    descripcion: '',
    id_tipo_producto: 0,
    fecha_creacion:'',
    nombre_tipo_producto: ''
  };

  LogisticaMaritima : LogisticaMaritima = {
    id_logistica_maritima: 0,
    id_producto: 0,
    cantidad_producto: 0,
    fecha_registro: '',
    fecha_entrega: '',
    id_puerto: 0,
    precio_envio: 0,
    precio_con_descuento: 0,
    numero_flota: '',
    numero_guia: '',
  };
  resultados: any[] = [];
  puertos: any[] = [];
  filaSeleccionada: number | null = null; 
  formularioVisible: boolean = false; 

  constructor(
    private productosService: ProductosService,
    private puertosService: PuertosService,
    private router: Router
  ) {}
    ngOnInit(): void {
      this.cargarPuertos(); 
    }
    onSubmit(): void { 
      this.productosService.getProductoByNombre(this.producto.nombre).subscribe({
        next: (response) => {
          this.resultados = response;
        },
        error: (error) => {
          console.error('Error al buscar producto:', error);
          alert('Error al buscar producto.');
        },
      });
    }
    mostrarFormulario(idProducto: number): void {
      if (this.filaSeleccionada === idProducto) {
        this.filaSeleccionada = null; // Oculta el formulario si ya estaba seleccionado
      } else {
        this.filaSeleccionada = idProducto; // Muestra el formulario
        this.LogisticaMaritima.id_producto = idProducto;
      }
    }
    
    cargarPuertos(): void {
      this.puertosService.getPuertos().subscribe({
        next: (response) => {
          this.puertos = response;
        },
        error: (error) => {
          console.error('Error al cargar los tipos de cliente:', error);
        }
      });
    }
  
    enviarFormulario(): void {
      console.log('Datos del formulario:', this.LogisticaMaritima);
      alert('Formulario enviado correctamente.');
      this.filaSeleccionada = null;
    }
    calcularDescuento(): void {
      const cantidad = this.LogisticaMaritima.cantidad_producto;
      const precioNormal = this.LogisticaMaritima.precio_envio;
  
      if (cantidad > 10) {
        this.LogisticaMaritima.precio_con_descuento = precioNormal * 0.95;
      } else {
        this.LogisticaMaritima.precio_con_descuento = precioNormal;
      }
    }
}
