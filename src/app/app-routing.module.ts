import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
// resolvers
import { ProductsResolver } from './services/products.resolver';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'products', component: ProductsComponent },
	{ path: 'products/:id', component: ProductDetailsComponent, resolve: { product: ProductsResolver } },
	{ path: 'cart', component: CartComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
