import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormInputComponent } from '../form/from-input/form-input.component';
const routes: Routes = [
  {
    path: '',
    component: FormInputComponent
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule { }
export const routingComponents = [ FormInputComponent];