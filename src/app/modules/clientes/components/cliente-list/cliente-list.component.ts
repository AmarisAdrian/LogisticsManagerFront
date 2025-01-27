import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  imports: [],
  templateUrl: './cliente-list.component.html',
  styleUrl: './cliente-list.component.css'
})
export class ClienteListComponent {
  constructor(private router: Router) {}

  onCreate() {
    this.router.navigate(['/clientes/crear']);
  }
}
