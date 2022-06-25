import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetProductList } from 'src/app/services/get-product-list.model';
import { GetProductListService } from 'src/app/services/get-product-list.service';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.css']
})
export class ProductDetailsViewComponent implements OnInit {
  public selectedProduct: GetProductList;
  public imgSelected = 0;
  public searchTerm: string;
  constructor(private getProductListService: GetProductListService, private router: Router) { }

  ngOnInit() {
    this.selectedProduct = sessionStorage.getItem('selectedProduct') ? JSON.parse(sessionStorage.getItem('selectedProduct')) :
      this.getProductListService.getSelectedProduct();
    console.log(this.selectedProduct);
    if (!this.selectedProduct) {
      this.router.navigateByUrl('/');
    }
    this.searchTerm = this.getProductListService.getSearchTerm();
  }

  handleBackNavigation() {
    this.getProductListService.setSelectedProduct(null);
    this.router.navigateByUrl('/');
  }
}
