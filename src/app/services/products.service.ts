import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/products';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {

	url: string = 'http://localhost:3000/products';

	constructor(private http: HttpClient) { }

	getAll() {
		return this.http.get<IProduct[]>(this.url);
	}

	getById(id: number) {
		return this.http.get<IProduct>(`${this.url}/${id}`);
	}
}
