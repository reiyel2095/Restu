import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { DiscountModel } from '../../models/discount/discount.model';
import { DiscountPostResponse } from '../../models/discount/discount-post-response.model';
import { DiscountListResponse } from '../../models/discount/discount-list-response.model';
import { DiscountGetResponse } from '../../models/discount/discount-get-response.model';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


@Injectable({
  providedIn: 'root'
})
export class DiscountService {
	//construccion del api para llamar el servicio del back
  apiurl:string = environment.apiUrl + "promo";

	constructor(private httpClient:HttpClient, private httpService:HttpService) {

	}
	//api para guardar los datos del promotion por POST
	guardarDiscount(promotion:DiscountModel)
	{
		const options = this.httpService.headerOptionsJson(true, true);
		let url = this.apiurl + "/add";
		return this.httpClient.post<DiscountPostResponse>(url, promotion, options);
	}
// api para obtener el listado de toda promocion por GET
	seleccionarDiscounts():Observable<DiscountListResponse> {
		const url = this.apiurl + "/select";
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<DiscountListResponse>(url, options);
	}
	// api para obtener los datos de un Discount por GET
  	getDiscount(idDiscount:string):Observable<DiscountGetResponse> {
		const url = this.apiurl + "/get/" + idDiscount;
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.get<DiscountGetResponse>(url, options);
	}
	// api para eliminar a Discount por GET
  	eliminarDiscount(idProduct:string):Observable<DiscountPostResponse> {
		const url = this.apiurl + "/delete";
		var data = { idProduct: idProduct }
		const options = this.httpService.headerOptionsJson(true, true);
		return this.httpClient.post<DiscountPostResponse>(url,data, options);
	}
}
