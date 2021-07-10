import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientModel } from 'src/app/models/client/client.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  client: ClientModel = new ClientModel();
  client_id: number = 0;

  lastnameFormControl = new FormControl('', [
    Validators.required,
    ]);

    passwordFormControl = new FormControl('', [
    Validators.required,
    ]);

    firstnameFormControl = new FormControl('', [
    Validators.required
    ]);

    phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(9)
    ]);

    emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
    ]);

    adressFormControl = new FormControl('', [
    Validators.required
    ]);

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  saveClient()
  {

  }

  back()
  {
    this.router.navigate(['']);
  }

  regresar(){

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
