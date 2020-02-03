import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CfmvWodComponent } from './cfmv-wod/cfmv-wod.component';
import { WhatIsCrossfitComponent } from './what-is-crossfit/what-is-crossfit.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { KidfitComponent } from './kidfit/kidfit.component';
import { RatesComponent } from './rates/rates.component';
import { ContactComponent } from './contact/contact.component';
import { CrossfitFaqComponent } from './what-is-crossfit/crossfit-faq/crossfit-faq.component';
import { NutritionComponent } from './what-is-crossfit/nutrition/nutrition.component';
import { CompetitionComponent } from './what-is-crossfit/competition/competition.component';
import { NutritionChallangeComponent } from './what-is-crossfit/nutrition/nutrition-challange/nutrition-challange.component';
import { OurCoachesComponent } from './our-coaches/our-coaches.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import { FlexLayoutModule } from '@angular/flex-layout';
import {_MatMenuDirectivesModule, MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CfmvWodComponent,
    WhatIsCrossfitComponent,
    GettingStartedComponent,
    KidfitComponent,
    RatesComponent,
    ContactComponent,
    CrossfitFaqComponent,
    NutritionComponent,
    CompetitionComponent,
    NutritionChallangeComponent,
    OurCoachesComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
