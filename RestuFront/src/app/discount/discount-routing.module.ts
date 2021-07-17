import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from '../shared/components/container/container.component';
import { DiscountListComponent } from './pages/discount-list/discount-list.component';

// se declara los componentes que se usaran en el modulo
export const DISCOUNT_COMPONENTS = [
    DiscountListComponent
];

// se arma el path segun el componente que queremos mostrar
const discountRoutes:Routes = [
	{
        path: 'descuento',
        component: ContainerComponent,
        children: [
          {
            path: 'listar',
            component: DiscountListComponent
          },
        ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(discountRoutes)
  ],
  exports: [
    RouterModule
  ]
})
// se hace una clase exportable para colocarlo en personal.module.ts
export class DiscountRoutingModule { }
