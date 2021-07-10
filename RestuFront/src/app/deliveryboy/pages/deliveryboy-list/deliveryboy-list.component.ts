import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DeliveryboyModel } from 'src/app/models/user/deliveryboy.model';
import { DeliveryboyService } from '../../services/deliveryboy.service';

@Component({
  selector: 'app-deliveryboy-list',
  templateUrl: './deliveryboy-list.component.html',
  styleUrls: ['./deliveryboy-list.component.scss']
})
export class DeliveryboyListComponent implements OnInit {

  deliveryboySeleccionado:DeliveryboyModel = null;
  dataSourceOne: MatTableDataSource<DeliveryboyModel>;
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
    this.listarDeliveryboy();
  }

  listarDeliveryboy()
  {

  }

  seleccionarDeliveryboy(row:DeliveryboyModel):void {
    this.deliveryboySeleccionado = row;
  }

  agregarDeliveryboy():void
  {
    this.router.navigate(['/deliveryboy/agregar']);
  }

  //Método para eliminar deliveryboys
  eliminarDeliveryboy()
  {

  }
  //Método para ir a la vista de un determinado Deliveryboy
  editarDeliveryboy()
  {
    /*if (this.deliveryboySeleccionado == null) return;
      let deliveryboy = this.deliveryboySeleccionado;
      this.router.navigate(['/deliveryboy/editar', deliveryboy.idDeliveryboy ]);*/
  }


}
