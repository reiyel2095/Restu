import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserbasicModel } from 'src/app/models/user/userbasic.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  user: UserbasicModel = new UserbasicModel();
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);
  constructor(public dialogRef: MatDialogRef<LoginComponent>, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  login():void{

  }

  signup()
  {
    this.router.navigate(['/signup']);
  }

}
