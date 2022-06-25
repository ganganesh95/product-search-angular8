import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListsViewComponent } from './components/product-lists-view/product-lists-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsViewComponent } from './components/product-details-view/product-details-view.component';
import { ProductDetailComponent } from './components/util-components/product-detail/product-detail.component';
import { HeaderComponent } from './components/util-components/header/header.component';
import { FooterComponent } from './components/util-components/footer/footer.component';
import { SearchBarComponent } from './components/util-components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListsViewComponent,
    ProductDetailsViewComponent,
    ProductDetailComponent,
    HeaderComponent,
    FooterComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
