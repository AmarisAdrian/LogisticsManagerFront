import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogisticaMaritimaListComponent } from './components/logistica-maritima-list/logistica-maritima-list.component';

const routes: Routes = [
    {
      path: '',
      component: LogisticaMaritimaListComponent,     
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogisticaMaritimaRoutingModule { }




