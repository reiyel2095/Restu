import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productSeleccionado:ProductModel = null;
  dataSourceOne: MatTableDataSource<ProductModel>;
  displayedColumnsOne: string[] = [
    'name',
    'price',
    'category',
    'image'];

    @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
    @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;

  constructor(private router:Router, private dialog: MatDialog) {
    this.dataSourceOne = new MatTableDataSource;
  }

  ngOnInit(): void {
    this.listarProduct();
  }

  selectProduct(row:ProductModel):void {
    this.productSeleccionado = row;
  }

  listarProduct(){

  }

  agregarProduct(){
    this.router.navigate(['/producto/agregar']);
  }

  editarProduct(){

  }

  eliminarProduct(){

  }

  mostrarImagenProduct(item:number){

  }

}
