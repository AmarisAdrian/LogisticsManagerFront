import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteDetailComponent } from './components/cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from './components/cliente-create/cliente-create.component';
import { ClienteEditComponent } from './components/cliente-edit/cliente-edit.component';

const routes: Routes = [
  { path: 'crear-cliente',
    component: ClienteCreateComponent }, 
  {
    path: '',
    component: ClienteListComponent,     
  },
  {
    path: ':id', 
    component: ClienteDetailComponent,
  },
  {
     path: 'editar/:id', 
     component: ClienteEditComponent 
    },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
