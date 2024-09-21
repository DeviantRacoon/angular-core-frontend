import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdministrationRoutingModule } from './administration-routing.module';

import { ListUsersComponent } from './pages/list-users/list-users.component';
import { BreadcrumbComponent } from '@components/index';


@NgModule({
  declarations: [
    ListUsersComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class AdministrationModule { }
