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
import { AuthGuard } from './core/core/auth.guard';


const routes: Routes = [
    {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'students',
    component: StudentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'new',
    component: AddstudentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'students/:id/edit',
    component: EditstudentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'students/:id/show',
    component: ShowstudentsComponent,
    canActivate: [AuthGuard]
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
