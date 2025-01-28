import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../models/cliente.model.model'
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-cliente-list',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './cliente-list.component.html',
  styleUrl: './cliente-list.component.css'
})
export class ClienteListComponent implements OnInit  {
  clientes: Cliente[] = []; 
  constructor(
    private router: Router,
    private clientesService: ClientesService
  ) {}

  onCreate() {
    this.router.navigate(['/clientes/crear']);
  }
  ngOnInit(): void {
    this.cargarClientes()
  }
  cargarClientes(): void {
    this.clientesService.getClientes().subscribe({
      next: (response) => {
        this.clientes = response;
        console.log('Clientes cargados:', this.clientes);
      },
      error: (error) => {
        console.error('Error al cargar clientes:', error);
      }
    });
  }
  
}
