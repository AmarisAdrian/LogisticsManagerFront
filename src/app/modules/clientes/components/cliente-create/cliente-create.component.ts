import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../models/cliente.model.model'
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 


@Component({
  standalone: true, 
  selector: 'app-cliente-create',
  imports: [FormsModule,CommonModule],
  templateUrl: './cliente-create.component.html',
  styleUrl: './cliente-create.component.css'
})
export class ClienteCreateComponent implements OnInit  {
  cliente: Cliente = {
    id_cliente: 0, 
    nombre_completo: '',
    email: '',
    direccion: '',
    telefono: '',
    id_tipo_cliente: 1
  };
  tipoClientes: any[] = [];

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {}

   ngOnInit(): void {
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

  onSubmit(): void {
    this.clientesService.createCliente(this.cliente).subscribe({
      next: (response) => {
        alert('Cliente creado exitosamente');
        this.router.navigate(['/clientes']);
      },
      error: (error) => {
        console.error('Error al crear cliente:', error);
        alert('Error al crear cliente. Revisa la consola para más detalles.');
      },
    });
  }
}
