import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteDetailComponent } from './components/cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from './components/cliente-create/cliente-create.component';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 

@NgModule({
 declarations: [
    ClienteListComponent,
    ClienteDetailComponent, 
    ClienteCreateComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    RouterModule,
    FormsModule 
  ]
})
export class ClientesModule { }
