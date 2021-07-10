import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ChefModel } from 'src/app/models/user/chef.model';

@Component({
  selector: 'app-chef-list',
  templateUrl: './chef-list.component.html',
  styleUrls: ['./chef-list.component.scss']
})
export class ChefListComponent implements OnInit {

  chefSeleccionado:ChefModel = null;
  dataSourceOne: MatTableDataSource<ChefModel>;
  displayedColumnsOne: string[] = [
    'dni',
	  'fullnombre',
    'celular',
    'email',
    'turno'];

    @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
    @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;

  constructor(private router:Router) {
    this.dataSourceOne = new MatTableDataSource;
  }

  ngOnInit(): void {
    this.listarChef();
  }

  seleccionarChef(row:ChefModel):void {
    this.chefSeleccionado = row;
  }
  //Método para llamar al api correspondiente a la api seleccionarChefs pasándole un parámetro y listar al chef
  listarChef()
  {

  }

  //Método para ir a la vista de agregar un chef nuevo
  agregarChef():void
  {
    this.router.navigate(['/chef/agregar']);
  }

  //Método para eliminar chefs
  eliminarChef()
  {

  }
  //Método para ir a la vista de un determinado chef
  editarChef()
  {
    if (this.chefSeleccionado == null) return;
      let chef = this.chefSeleccionado;
      this.router.navigate(['/chef/editar', chef.idChef ]);
  }

}


