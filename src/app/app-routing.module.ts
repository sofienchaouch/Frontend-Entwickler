
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {
    path:'',
    component:PeopleListComponent,
  },
  {
    path:'people-list',
    component:PeopleListComponent,
  },
  {
    path:'add-user',
    component:AddUserComponent,
  },
  {
    path:'update-user/:id',
    component:UpdateUserComponent,
  },
  {
    path:'user-details/:id',
    component:DetailsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }