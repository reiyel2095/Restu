import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DeliveryboyModel } from 'src/app/models/user/deliveryboy.model';
import { DeliveryboyService } from '../../services/deliveryboy.service';

@Component({
  selector: 'app-deliveryboy-edit',
  templateUrl: './deliveryboy-edit.component.html',
  styleUrls: ['./deliveryboy-edit.component.scss']
})
export class DeliveryboyEditComponent implements OnInit {


  deliveryboy: DeliveryboyModel = new DeliveryboyModel();
  deliveryboy_id: number = 0;
  actualizarButton: boolean = false;
  guardarButton: boolean = true;

  dniFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(8)
  ]);

  lastnameFormControl = new FormControl('', [
    Validators.required,
    ]);

    firstnameFormControl = new FormControl('', [
    Validators.required,
    ]);

    phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(9)
    ]);

    ageFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
    ]);

    workshiftFormControl = new FormControl('', [
    Validators.required
    ]);

    emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
    ]);

    passwordFormControl = new FormControl('', [
    Validators.required
    ]);

    adressFormControl = new FormControl('', [
      Validators.required
      ]);

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.deliveryboy_id = +this.route.snapshot.paramMap.get('deliveryboy_id');
    if ( this.deliveryboy_id > 0) {
      this.cargarDeliveryboy( this.deliveryboy_id );
      this.actualizarButton = true;
		  this.guardarButton = false;
    }
  }
  cargarDeliveryboy(idDeliveryboy){

  }

  guardarDeliveryboy(){


  }

  regresar(){
    this.router.navigate(['/deliveryboy/listar']);
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
