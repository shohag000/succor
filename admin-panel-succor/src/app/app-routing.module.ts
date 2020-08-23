import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AuthenticationModule } from './authentication/authentication.module';

const routes: Routes = [
  {
    path: "student",
    component: StudentComponent
  },
  {
    path: 'auth',
    loadChildren: './authentication/authentication.module'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthenticationModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
