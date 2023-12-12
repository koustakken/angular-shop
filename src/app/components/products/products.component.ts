import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
	products: IProduct[] = [];
	productsSubscription!: Subscription;
	constructor(private productsService: ProductsService) { }

	ngOnInit(): void {
		this.productsSubscription = this.productsService.getAll().subscribe((data) => {
			this.products = data;
		})
	}

	ngOnDestroy(): void {
		if (this.productsSubscription) {
			this.productsSubscription.unsubscribe();
		}
	}
}
