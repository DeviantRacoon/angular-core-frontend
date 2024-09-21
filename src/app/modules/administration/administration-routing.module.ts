import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListUsersComponent } from './pages/list-users/list-users.component';
import { AddUserComponent } from './pages/list-users/add-user/add-user.component';

const routes: Routes = [
  { path: 'users', component: ListUsersComponent, },
  { path: 'user', component: AddUserComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
