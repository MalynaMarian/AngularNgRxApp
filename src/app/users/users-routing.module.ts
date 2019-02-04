import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ManageUserComponent } from './manage-user/manage-user.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'post',
    component: ManageUserComponent
  },
  {
    path: 'post/:id',
    component: ManageUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
