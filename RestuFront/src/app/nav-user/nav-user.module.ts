import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavUserRoutingModule, NAVUSER_COMPONENTS } from './nav-user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './dialogs/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
// se declara la constante componentes , shared module para el material , el servicio y el formsmodule para el formulario
@NgModule({
    declarations: [
        NAVUSER_COMPONENTS
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        NavUserRoutingModule
    ],
    providers: [
        //HomeService
    ]
  })
  // se hace un module propio del modulo que vamos a trabajar y se exportara en el app.module.ts de la raiz
  export class NavUserModule {}
