import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swiper from 'swiper';
import { LoginComponent } from '../../dialogs/login/login.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialog:MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  login():void{
    this.dialog.open(LoginComponent, { disableClose: true, autoFocus:false, width: '800px',panelClass: 'custom-dialog-container' });
  }
}
