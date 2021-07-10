import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/category/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categorySeleccionado:CategoryModel = null;
  dataSourceOne: MatTableDataSource<CategoryModel>;
  displayedColumnsOne: string[] = [
	  'name',
    'description'];

    @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
    @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.listarCategory();
  }

  seleccionarCategory(row:CategoryModel):void {
    this.categorySeleccionado = row;
  }
  //Método para llamar al api correspondiente a la api seleccionar categories pasándole un parámetro y listar al category
  listarCategory()
  {

  }

  //Método para ir a la vista de agregar un category nuevo
  agregarCategory():void
  {
    this.router.navigate(['/category/agregar']);
  }

  //Método para eliminar categories
  eliminarCategory()
  {

  }
  //Método para ir a la vista de un determinado category
  editarCategory()
  {
    if (this.categorySeleccionado == null) return;
      let category = this.categorySeleccionado;
      this.router.navigate(['/category/editar', category.idCategory ]);
  }

}
