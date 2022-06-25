import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListsViewComponent } from './product-lists-view.component';

describe('ProductListsViewComponent', () => {
  let component: ProductListsViewComponent;
  let fixture: ComponentFixture<ProductListsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
