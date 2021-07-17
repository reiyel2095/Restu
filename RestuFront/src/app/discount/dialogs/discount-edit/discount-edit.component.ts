import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountModel } from 'src/app/models/discount/discount.model';

@Component({
  selector: 'app-discount-edit',
  templateUrl: './discount-edit.component.html',
  styleUrls: ['./discount-edit.component.scss']
})
export class DiscountEditComponent implements OnInit {

  //products:ProductModel = null;

  discount: DiscountModel = new DiscountModel();
  discount_id: number = 0;
  actualizarButton: boolean = false;
  guardarButton: boolean = true;

  idProductFormControl = new FormControl('', [
  Validators.required,
  ]);

  descuentoFormControl = new FormControl('', [
    Validators.required,
    ]);

  constructor(public dialogRef: MatDialogRef<DiscountEditComponent>, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  populateProduct()
  {

  }

  cargarDiscount()
  {

  }

  guardarDiscount()
  {

  }

  regresar(){
    this.dialogRef.close();
  }

  onClose(rtn) {
    this.dialogRef.close(rtn);
  }

    keypressNumbers(event: any) {
      const pattern = /[0-9]/;
      const inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
        event.preventDefault();
      }
      }

    keypressLetters(event: any) {
      const pattern = /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]/;
      const inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
        event.preventDefault();
      }
      }


}
