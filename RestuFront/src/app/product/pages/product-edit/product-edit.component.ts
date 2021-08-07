import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/category/category.model';
import { ProductModel } from 'src/app/models/product/product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  categories:CategoryModel = null;
  product: ProductModel = new ProductModel();

  categoryid: string="";
  product_id: number = 0;
  actualizarButton: boolean = false;
  guardarButton: boolean = true;

  id: number = 0;
	file: any;
	lead_id: number = 0;
	image_name: string = null;
  progress = false;
  previmage_name:string=null;


  nameFormControl = new FormControl('', [
  Validators.required,
  ]);

  descriptionFormControl = new FormControl('', [
  Validators.required,
  ]);

  priceFormControl = new FormControl('', [
  Validators.required
  ]);

  categoryidFormControl = new FormControl('', [
  Validators.required
  ]);

  imageFormControl = new FormControl('', [
  Validators.required
  ]);

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  populateCategory() {

  }

  cargarProduct(idProduct){

  }

  guardarProduct(){

}

  regresar(){
    this.router.navigate(['/producto/listar']);
  }

  saveImage() {
  }

  deletenameImage() {
    this.image_name = null;
    this.product.image_name = null;
  }

  showUploadImage() {
		return (this.image_name != null);
  }

  clearCarga() {
		this.file = null;
  }

  loadImage(event: any) {
		this.file = event.target.files[0];
    console.log(this.file);
    this.product.image_name = this.file
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
