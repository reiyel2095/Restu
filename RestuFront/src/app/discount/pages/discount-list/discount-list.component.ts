import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DiscountModel } from 'src/app/models/discount/discount.model';
import { DiscountEditComponent } from '../../dialogs/discount-edit/discount-edit.component';
import { DiscountService } from '../../services/discount.service';

@Component({
  selector: 'app-discount-list',
  templateUrl: './discount-list.component.html',
  styleUrls: ['./discount-list.component.scss']
})
export class DiscountListComponent implements OnInit {

  promotionSeleccionado:DiscountModel = null;
  dataSourceOne: MatTableDataSource<DiscountModel>;
  displayedColumnsOne: string[] = [
    'name',
    'descuento',
	  'price'];

    @ViewChild('TableOnePaginator', {static: true}) tableOnePaginator: MatPaginator;
    @ViewChild('TableOneSort', {static: true}) tableOneSort: MatSort;

  constructor(private dialog:MatDialog) {
    this.dataSourceOne = new MatTableDataSource;
   }

  ngOnInit(): void {
  }

  seleccionarDiscount(row:DiscountModel):void {
    this.promotionSeleccionado = row;
  }

  listarDiscount()
  {
      /*this.discountservice.seleccionarPromotions()
      .subscribe(
          (response) => {
              console.log(response);
              if (response != null && response.ok && response.result != null){
                  const product = response.result;
                  this.dataSourceOne.data = product;
                  this.dataSourceOne.paginator = this.tableOnePaginator;
                  this.dataSourceOne.sort = this.tableOneSort;
              }
          },
          (err) => {
              console.log(err);
          }
      );*/
  }

//Método para ir a la vista de agregar un promotion nuevo
agregarDiscount():void
{
  let dialogRef=this.dialog.open(DiscountEditComponent,{
    autoFocus:false});

  dialogRef.afterClosed().subscribe((result)=>{
    if (result == true)
    {
      this.listarDiscount();
    }
  });
}

//Método para eliminar promotions
eliminarDiscount()
{
  /*if (this.promotionSeleccionado == null) return;

  Swal.fire({
    title: 'Estas seguro?',
    text: "El registro seleccionado se eliminará!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      // llamados el servicio eliminarPromotion desde promotion.service.ts y se le pasa 1 parámetro
    if (result.value) {
    this.promotionservice.eliminarPromotion(this.promotionSeleccionado.idProduct)
    .subscribe(
      (response) => {
        console.log(response);
        if (response.ok){
          Swal.fire(
            'Eliminado!',
            'El registro a sido removido.',
            'success'
            );
          this.listarPromotion();
          this.promotionSeleccionado = null;
        }
      },
      (err) => {
        console.log(err);
      }
    );
    }
    })*/
}
//Método para ir a la vista de un determinado Promotion
// editarPromotion()
// {
//   if (this.promotionSeleccionado == null) return;
//     let promotion = this.promotionSeleccionado;
//     this.router.navigate(['/promotion/editar', promotion.idProduct ]);
// }


}
