import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SubNavbarComponent } from './components/sub-navbar/sub-navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeOutdoorComponent } from './components/home-outdoor/home-outdoor.component';
import { ElectronicGadgetsComponent } from './components/electronic-gadgets/electronic-gadgets.component';
import { InquiryComponent } from './components/inquiry/inquiry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecommendedItemsComponent } from './components/recommended-items/recommended-items.component';
import { ExtraServicesComponent } from './components/extra-services/extra-services.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    SubNavbarComponent,
    BannerComponent,
    HomeOutdoorComponent,
    ElectronicGadgetsComponent,
    InquiryComponent,
    RecommendedItemsComponent,
    ExtraServicesComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
