import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 
import {provideHttpClient ,HttpClientModule} from '@angular/common/http'; 


@NgModule({
  declarations: [],
  imports: [
     CommonModule,
      RouterModule,
      FormsModule ,  
      HttpClientModule 
  ],
  providers: [provideHttpClient()]
})
export class ProductosModule { }
