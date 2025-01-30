import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';  
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/productos.model.model';
import { Router } from '@angular/router';

@Component({
  standalone: true, 
  selector: 'app-producto-create',
  imports: [FormsModule,CommonModule],
  templateUrl: './producto-create.component.html',
  styleUrl: './producto-create.component.css'
})
export class ProductoCreateComponent {
    producto: Producto = {
      id_producto: 0, 
      nombre: '',
      descripcion: '',
      id_tipo_producto: 0,
      fecha_creacion:'',
      nombre_tipo_producto: ''
    };
    tipoProductos: any[] = [];
    constructor(
        private productosService: ProductosService,
        private router: Router
      ) {}
      ngOnInit(): void {
        this.cargarTipoProductos(); 
      }
      cargarTipoProductos(): void {
        this.productosService.getTipoProductos().subscribe({
          next: (response) => {
            this.tipoProductos = response;
          },
          error: (error) => {
            console.error('Error al cargar los tipos de cliente:', error);
          }
        });
      }
      onSubmit(): void {
        this.producto.fecha_creacion = new Date(this.producto.fecha_creacion).toISOString().split('T')[0]; 
        this.productosService.createProducto(this.producto).subscribe({
          next: (response) => {
            alert('Producto creado exitosamente');
            this.router.navigate(['/productos']);
          },
          error: (error) => {
            console.error('Error al crear productos:', error);
            alert('Error al crear cliente. Revisa la consola para más detalles.');
          },
        });
      }
}
