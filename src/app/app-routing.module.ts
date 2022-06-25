import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ProductDetailsViewComponent } from './components/product-details-view/product-details-view.component';

import { ProductListsViewComponent } from './components/product-lists-view/product-lists-view.component';

const routes: Routes = [
    { path: '', component: ProductListsViewComponent },
    { path: 'productDetails', component: ProductDetailsViewComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
