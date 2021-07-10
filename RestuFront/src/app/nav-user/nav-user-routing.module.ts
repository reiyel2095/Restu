import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './dialogs/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';


// se declara los componentes que se usaran en el modulo
export const NAVUSER_COMPONENTS = [
    HomeComponent,
    SignupComponent,
    LoginComponent
];

// se arma el path segun el componente que queremos mostrar
const navUserRoutes:Routes = [
	{
        path: '',
        component: HomeComponent
  },
  {
        path: 'signup',
        component: SignupComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(navUserRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NavUserRoutingModule { }
