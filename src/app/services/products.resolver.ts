import { Injectable } from '@angular/core';
import {
	Router, Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { IProduct } from '../models/products';
import { ProductsService } from './products.service';

@Injectable({
	providedIn: 'root'
})
export class ProductsResolver implements Resolve<IProduct> {
	constructor(private productService: ProductsService, private router: Router) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
		return this.productService.getById(route.params?.['id']).pipe(
			catchError(() => { this.router.navigate(['']); return EMPTY; })
		);
	}
}
