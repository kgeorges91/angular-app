import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { AddstudentsComponent } from './addstudents/addstudents.component';
import { EditstudentsComponent } from './editstudents/editstudents.component';
import { ShowstudentsComponent } from './showstudents/showstudents.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
    {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'new',
    component: AddstudentsComponent
  },
  {
    path: 'students/:id/edit',
    component: EditstudentsComponent
  },
  {
    path: 'students/:id/show',
    component: ShowstudentsComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login-email', component: EmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
