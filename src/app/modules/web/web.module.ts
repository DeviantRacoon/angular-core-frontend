import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebRoutingModule } from './web-routing.module';

import { AuthComponent } from './pages/auth/auth.component';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WebRoutingModule,
  ]
})
export class WebModule { }
