import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { Router,RouterModule } from '@angular/router';
import { Producto } from '../../../productos/models/productos.model.model';
import { ProductosService } from '../../../productos/services/productos.service';

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
  resultados: any[] = [];

  constructor(
    private productosService: ProductosService,
    private router: Router
  ) {}
    onSubmit(): void { 
      this.productosService.getProductoByNombre(this.producto.nombre).subscribe({
        next: (response) => {
          console.log('Producto encontrado:', response);
          this.resultados = response;
        },
        error: (error) => {
          console.error('Error al buscar producto:', error);
          alert('Error al buscar producto.');
        },
      });
    }
}
