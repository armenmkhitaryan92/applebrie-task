import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './routes/user/user.component';
import { UsersListComponent } from './routes/users-list/users-list.component';

@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
