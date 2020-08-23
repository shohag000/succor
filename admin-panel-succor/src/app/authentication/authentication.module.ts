import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from '../material.module';

const routes: Routes = [
  {
    path: "auth/login",
    component: LoginComponent
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AngularMaterialModule,
    RouterModule.forRoot(routes),
  ]
})
export class AuthenticationModule { }
