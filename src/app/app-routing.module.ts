import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmplyeeComponent } from './emplyee/create-emplyee/create-emplyee.component';
import { EmplyeesListComponent } from './emplyee/emplyees-list/emplyees-list.component';
import { UpdateEmplyeeComponent } from './emplyee/update-emplyee/update-emplyee.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'add', component: CreateEmplyeeComponent },
  { path: 'employees', component: EmplyeesListComponent },
  { path: 'update/:id', component: UpdateEmplyeeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
