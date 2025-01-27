import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../models/cliente.model.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  imports: [FormsModule],
  templateUrl: './cliente-create.component.html',
  styleUrl: './cliente-create.component.css'
})
export class ClienteCreateComponent {
  cliente: Cliente = {
    id_cliente: 0, 
    nombre_completo: '',
    email: '',
    direccion: '',
    telefono: '',
    id_tipo_cliente: 1
  };

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.clientesService.createCliente(this.cliente).subscribe({
      next: (response) => {
        alert('Cliente creado exitosamente:'+ response);
        this.router.navigate(['/clientes']);
      },
      error: (error) => {
        alert('Error al crear cliente:'+ error);
      },
    });
  }
}
