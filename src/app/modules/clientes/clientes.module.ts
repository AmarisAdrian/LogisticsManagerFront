import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteDetailComponent } from './components/cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from './components/cliente-create/cliente-create.component';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 
import {provideHttpClient ,HttpClientModule} from '@angular/common/http'; 

@NgModule({
 declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule ,  
    HttpClientModule 
  ],
  providers: [provideHttpClient()]
})
export class ClientesModule { }
