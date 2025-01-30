import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { Router,RouterModule } from '@angular/router';
import { Producto } from '../../models/productos.model.model'
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto-list',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.css'
})
export class ProductoListComponent implements OnInit {
   productos: Producto[] = []; 
    constructor(
       private router: Router,
       private productosService: ProductosService
     ) {}
   
     onCreate() {
       this.router.navigate(['/productos/crear']);
     }
     ngOnInit(): void {
      this.cargarProductos()
    }
    cargarProductos(): void {
      this.productosService.getProductos().subscribe({
        next: (response) => {
          this.productos = response.map(producto => ({
            ...producto,
            fecha_creacion: producto.fecha_creacion.split('T')[0]
          }));
          console.log('Productos cargados:', this.productos);
        },
        error: (error) => {
          console.error('Error al cargar productos:', error);
        }
      });
    }

}
