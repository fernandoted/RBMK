import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreSectionComponent } from './store-section/store-section.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { BannerComponent } from './components/banner/banner.component';
import { TitleSectionComponent } from './components/title-section/title-section.component';

@NgModule({
    declarations: [
        AppComponent,
        BannerComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        StoreSectionComponent,
        CardItemComponent,
        TitleSectionComponent
    ]
})
export class AppModule { }
