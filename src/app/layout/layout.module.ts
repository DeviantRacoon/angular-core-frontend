import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WrapperComponent } from './wrapper/wrapper.component';
import { NavbarComponent, SideMenuComponent, ButtonThemeComponent } from '@components/index';

import { LayoutRoutingModule } from './layout-routing.module';


@NgModule({
  declarations: [
    WrapperComponent,
    NavbarComponent,
    SideMenuComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ButtonThemeComponent
  ]
})
export class LayoutModule { }
