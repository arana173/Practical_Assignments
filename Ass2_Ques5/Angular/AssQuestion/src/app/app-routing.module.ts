import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudComponent } from './add-stud/add-stud.component';
import { EditStudComponent } from './edit-stud/edit-stud.component';
import { DisplayStudComponent } from './display-stud/display-stud.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"add",component:AddStudComponent},
  {path:"edit/:id",component:EditStudComponent},
  {path:"",component:DisplayStudComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
