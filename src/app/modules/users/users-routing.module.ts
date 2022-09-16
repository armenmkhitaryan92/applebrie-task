import {NgModule} from '@angular/core';
import {UsersComponent} from './users.component';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './routes/user/user.component';
import {UsersListComponent} from './routes/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {path: '', redirectTo: 'users-list', pathMatch: 'full'},
      {path: '', component: UsersListComponent},
      {path: 'user/:id', component: UserComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
