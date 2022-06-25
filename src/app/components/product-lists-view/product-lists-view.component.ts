import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { GetProductList, GetProductListPayload, GetProductsListResponse } from 'src/app/services/get-product-list.model';
import { GetProductListService } from 'src/app/services/get-product-list.service';

@Component({
  selector: 'app-product-lists-view',
  templateUrl: './product-lists-view.component.html',
  styleUrls: ['./product-lists-view.component.css']
})
export class ProductListsViewComponent implements OnInit {
  public productLists: GetProductList[];
  public getProductListLoading = false;
  public paginationStarted: boolean;
  public totalProducts: number;
  public totalPages: number;
  public pageSize = 10;
  public errorMessage = 'internal error been found.';
  @ViewChild('errorPopUp', {static: false}) errorTemplateRef: TemplateRef<any>;
  constructor(private router: Router, private getProductListService: GetProductListService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.handleGetProductList();
  }

  handleGetProductList() {
    this.getProductListService.getLoading().subscribe((loading: boolean) => {
      this.getProductListLoading = loading;
      if (!loading) {
        const apiResults: GetProductsListResponse = this.getProductListService.getResults();
        if (apiResults && apiResults.flowStatus === 'SUCCESS' && apiResults.results) {
          this.totalProducts = apiResults.results.totalProducts;
          this.productLists = apiResults.results.products ? apiResults.results.products : [];
          if (!this.paginationStarted) {
            this.paginationStarted = true;
          }
          this.setPagination();
          console.log(apiResults.results);
        } else if(apiResults && apiResults.flowStatus === 'FAILURE' ) {
          this.openDialog();
        }
      }
    });
  }

  openDialog() {
    this.dialog.open(this.errorTemplateRef);
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  public onProductClick(product: GetProductList): void {
    this.getProductListService.setSelectedProduct(product);
    sessionStorage.setItem('selectedProduct', JSON.stringify(product));
    this.router.navigateByUrl('/productDetails');
  }

  public handlePaginationEvent(event) {
    this.pageSize = event.pageSize;
    const payload: GetProductListPayload = {
      searchTerm: this.getProductListService.getSearchTerm(),
      start: event.pageIndex + 1,
      itemPerPage: event.pageSize
    };
    this.getProductListService.call(payload);
  }

  public setPagination() {
    const dividedValue = this.totalProducts / this.pageSize;
    const mathRound = Math.round(dividedValue);
    if (Math.sign(dividedValue - mathRound) === 1) {
      this.totalPages = mathRound + 1;
    } else {
      this.totalPages = mathRound;
    }
  }
}
