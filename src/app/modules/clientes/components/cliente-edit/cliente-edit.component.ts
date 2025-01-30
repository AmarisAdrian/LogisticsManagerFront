import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../models/cliente.model.model';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css'],
  imports: [FormsModule,CommonModule],
})
export class ClienteEditComponent implements OnInit {
  cliente: Cliente = { // Inicializa el cliente vacío o con valores predeterminados
    id_cliente: 0,
    nombre_completo: '',
    direccion: '',
    telefono: '',
    email: '',
    id_tipo_cliente: 1
  };
  tipoClientes: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientesService: ClientesService
  ) {}

  ngOnInit(): void {
    this.loadCliente();
    this.cargarTipoClientes(); 
  }

  cargarTipoClientes(): void {
    this.clientesService.getTipoClientes().subscribe({
      next: (response) => {
        this.tipoClientes = response;
      },
      error: (error) => {
        console.error('Error al cargar los tipos de cliente:', error);
      }
    });
  }

  loadCliente(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clientesService.getClienteById(id).subscribe((cliente) => {
        this.cliente = cliente;
      });
    }
  }

  onSubmit(): void {
    this.clientesService.updateCliente(this.cliente).subscribe({
      next: () => {
        alert('Cliente actualizado exitosamente');
        this.router.navigate(['/clientes']);
      },
      error: (err) => {
        alert('Ha ocurrido un error');
        console.error('Error al editar el cliente', err);
      }
    });
  }
}
