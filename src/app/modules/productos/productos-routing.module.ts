import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ProductoDetailComponent } from './components/producto-detail/producto-detail.component';
import { ProductoCreateComponent } from './components/producto-create/producto-create.component';
import { ProductoEditComponent } from './components/producto-edit/producto-edit.component';

const routes: Routes = [
  { path: 'crear-producto',
    component: ProductoCreateComponent }, 
  {
    path: '',
    component: ProductoListComponent,     
  },
  {
    path: ':id', 
    component: ProductoDetailComponent,
  },
  {
     path: 'editar/:id', 
     component: ProductoEditComponent 
    },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
