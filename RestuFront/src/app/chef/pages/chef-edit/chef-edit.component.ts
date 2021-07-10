import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefModel } from 'src/app/models/user/chef.model';
import Swal from 'sweetalert2';
import { ChefService } from '../../services/chef.service';

@Component({
  selector: 'app-chef-edit',
  templateUrl: './chef-edit.component.html',
  styleUrls: ['./chef-edit.component.scss']
})
export class ChefEditComponent implements OnInit {

  chef: ChefModel = new ChefModel();
  chef_id: number = 0;
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

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  cargarChef(idChef){

  }


  guardarChef(){

  }

  regresar(){
    this.router.navigate(['/chef/listar']);
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
