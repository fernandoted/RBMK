import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CardItemComponent } from '../components/card-item/card-item.component';
import { TitleSectionComponent } from '../components/title-section/title-section.component';

@Component({
  selector: 'app-store-section',
  templateUrl: './store-section.component.html',
  styleUrls: ['./store-section.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    CardItemComponent,
    TitleSectionComponent
  ],
})
export class StoreSectionComponent {

}
