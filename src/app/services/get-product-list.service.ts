import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { GetProductList, GetProductsListResponse, GetProductListPayload } from './get-product-list.model';
@Injectable({
  providedIn: 'root'
})
export class GetProductListService {
  private serverUrl = 'https://www.blibli.com/backend/search/products';
  private loading = new BehaviorSubject<boolean>(false);
  private apiResults: GetProductsListResponse = null;
  private searchTerm: string;
  private selectedProduct: GetProductList;
  constructor(private http: HttpClient) { }

  public call(payload: GetProductListPayload) {
    if (!payload.itemPerPage || !payload.start) {
      return;
    }
    this.loading.next(true);
    const httpSubscription: Subscription = this.http.get(this.serverUrl, {
      responseType: 'json',
      params: {
        searchTerm: payload.searchTerm,
        start: payload.start,
        itemPerPage: payload.itemPerPage
      },
    }).subscribe((response: any) => {
      this.apiResults = new GetProductsListResponse('SUCCESS', response ? response.data : null);
      this.loading.next(false);
      httpSubscription.unsubscribe();
    }, (error) => {
      this.apiResults = new GetProductsListResponse('FAILURE', null);
      this.loading.next(false);
      httpSubscription.unsubscribe();
    }
    );
  }

  public getLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  public getResults(): GetProductsListResponse {
    return this.apiResults;
  }

  public setSelectedProduct(product: GetProductList): void {
    this.selectedProduct = product;
  }
  public getSelectedProduct(): GetProductList {
    return this.selectedProduct;
  }
  public setSearchTerm(searchTerm: string) {
    this.searchTerm = searchTerm;
  }
  public getSearchTerm(): string {
    return this.searchTerm;
  }
}
