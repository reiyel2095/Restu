import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ProductPostResponse } from '../../models/product/product-post-response.model';
import { ProductModel } from '../../models/product/product.model';
import { ProductListResponse } from '../../models/product/product-list-response.model';
import { ProductGetResponse } from '../../models/product/product-get-response.model';
//import { FilePostResponse } from '../models/file-post-response';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiurl:string = environment.apiUrl + "product";

	constructor(private httpClient:HttpClient, private httpService:HttpService) {

	}
	saveProduct(product:ProductModel)
	{
		const options = this.httpService.headerOptionsJson(true, true);
		let url = this.apiurl + "/add";
		return this.httpClient.post<ProductPostResponse>(url, product, options);
	}

	seleccionarProducts():Observable<ProductListResponse> {
		const url = this.apiurl + "/select";
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<ProductListResponse>(url, options);
  }

  seleccionarProductsByCategory(idCategory:number):Observable<ProductListResponse> {
		const url = this.apiurl + "/select-category/"+idCategory;
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<ProductListResponse>(url, options);
  }

  getProduct(idProduct:string):Observable<ProductGetResponse> {
		const url = this.apiurl + "/get/" + idProduct;
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<ProductGetResponse>(url, options);
	}

  eliminarProduct(idProduct:string):Observable<ProductPostResponse> {
		const url = this.apiurl + "/delete";
		var data = { idProduct: idProduct }
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.post<ProductPostResponse>(url,data, options);
	}

	/*cargarImagen(file: File, idProduct: any) {
		const options = this.httpService.headerOptionsForm(true);
		const formData: FormData = new FormData();
		//console.log(file);
		//console.log(file.name);
		formData.append('image', file, file.name);
		formData.append('idProduct', idProduct);
		const url = this.apiurl + '/uploadimg';
		return this.httpClient.post<FilePostResponse>(url, formData, options);
	}*/

}
