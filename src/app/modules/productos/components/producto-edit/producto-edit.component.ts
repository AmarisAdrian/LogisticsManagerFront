import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/productos.model.model';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-producto-edit',
  imports: [FormsModule,CommonModule],
  templateUrl: './producto-edit.component.html',
  styleUrl: './producto-edit.component.css'
})
export class ProductoEditComponent implements OnInit {
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
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.loadProducto();
    this.cargarTipoProductos(); 
  }
  loadProducto(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productosService.getProductoById(id).subscribe((producto) => {
        this.producto = producto;
      });
    }
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
    this.productosService.updateProducto(this.producto).subscribe({
      next: () => {
        alert('Producto actualizado exitosamente');
        this.router.navigate(['/productos']);
      },
      error: (err) => {
        alert('Ha ocurrido un error');
        console.error('Error al editar el cliente', err);
      }
    });
  }

}
