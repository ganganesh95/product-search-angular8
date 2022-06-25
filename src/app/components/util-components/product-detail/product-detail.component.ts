import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() productImage: string;
  @Input() isOfficialProduct: boolean;
  @Input() productName: string;
  @Input() reviewRating: string;
  @Input() reviewCount: string;
  @Input() priceDisplay: string;
  @Input() strikeThroughPriceDisplay: string;
  @Input() discount: string;
  @Input() merchantName: string;
  @Input() merchantLocation: string;
  constructor() { }

  ngOnInit() {
  }

}
