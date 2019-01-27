import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [UsersComponent, ManageUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [UserService]
})
export class UsersModule { }
