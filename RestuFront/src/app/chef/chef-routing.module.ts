import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChefListComponent } from './pages/chef-list/chef-list.component';
import { ChefEditComponent } from './pages/chef-edit/chef-edit.component';
import { ContainerComponent } from '../shared/components/container/container.component';

// se declara los componentes que se usaran en el modulo
export const CHEF_COMPONENTS = [
    ChefListComponent,
    ChefEditComponent
];

// se arma el path segun el componente que queremos mostrar
const chefRoutes:Routes = [
	{
        path: 'chef',
        component: ContainerComponent,
        children: [
          {
            path: 'listar',
            component: ChefListComponent
          },
          {
            path: 'agregar',
            component: ChefEditComponent
          },
          {
            path: 'editar/:chef_id',
            component: ChefEditComponent
          }
        ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(chefRoutes)
  ],
  exports: [
    RouterModule
  ]
})
// se hace una clase exportable para colocarlo en personal.module.ts
export class ChefRoutingModule { }
