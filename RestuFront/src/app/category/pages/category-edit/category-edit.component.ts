import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/category/category.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

  category: CategoryModel = new CategoryModel();
  category_id: number = 0;
  actualizarButton: boolean = false;
  guardarButton: boolean = true;

  nameFormControl = new FormControl('', [
  Validators.required,
  ]);

  descriptionFormControl = new FormControl('', [
  Validators.required,
  ]);

  constructor(private route:ActivatedRoute,  private router:Router) { }

  ngOnInit(): void {
  }

  cargarCategory(idCategory){

  }

  guardarCategory(){

  }

  regresar(){
    this.router.navigate(['/category/listar']);
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
