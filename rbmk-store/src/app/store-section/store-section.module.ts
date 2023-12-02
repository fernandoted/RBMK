import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreSectionComponent } from './store-section.component';
import { ProductPageComponent } from '../product-page/product-page.component';



@NgModule({
  declarations: [
    StoreSectionModule
  ],
  imports: [
    CommonModule,
    ProductPageComponent
  ]
})
export class StoreSectionModule { }
