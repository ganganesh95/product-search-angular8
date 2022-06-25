import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { GetProductListPayload } from 'src/app/services/get-product-list.model';
import { GetProductListService } from 'src/app/services/get-product-list.service';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public searchForm: FormGroup =  new FormGroup({
    searchText: new FormControl('', [Validators.required])
  });
  constructor(private getProductListService: GetProductListService, private router: Router) {}

  ngOnInit() {
  }

  public onSubmit() {
    console.log(this.searchForm.value);
    const payload: GetProductListPayload = {
      searchTerm: this.searchForm.value.searchText,
      start: '1',
      itemPerPage: '10'
    };
    this.getProductListService.setSearchTerm(this.searchForm.value.searchText);
    this.getProductListService.call(payload);
    this.router.navigateByUrl('/');
  }
}
