import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardItemComponent } from '../components/card-item/card-item.component';
import { TitleSectionComponent } from '../components/title-section/title-section.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    TitleSectionComponent,
    CardItemComponent
  ],
})
export class ProductPageComponent {

}
