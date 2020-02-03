import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import {CfmvWodComponent} from "./cfmv-wod/cfmv-wod.component";
import {ContactComponent} from "./contact/contact.component";
import {GettingStartedComponent} from "./getting-started/getting-started.component";
import {KidfitComponent} from "./kidfit/kidfit.component";
import {OurCoachesComponent} from "./our-coaches/our-coaches.component";
import {RatesComponent} from "./rates/rates.component";
import {WhatIsCrossfitComponent} from "./what-is-crossfit/what-is-crossfit.component";
import {CompetitionComponent} from "./what-is-crossfit/competition/competition.component";
import {CrossfitFaqComponent} from "./what-is-crossfit/crossfit-faq/crossfit-faq.component";
import {NutritionComponent} from "./what-is-crossfit/nutrition/nutrition.component";


const routes: Routes = [

  {path:'home', component: HomeComponent},
  {path:'cfmv-wod', component: CfmvWodComponent},
  {path:'contact', component: ContactComponent},
  {path:'getting-started', component: GettingStartedComponent},
  {path:'kidfit', component: KidfitComponent},
  {path:'our-coaches', component: OurCoachesComponent},
  {path:'ratest', component: RatesComponent},
  {path:'what-is-crossfit', component: WhatIsCrossfitComponent},
  {path:'competition', component: CompetitionComponent},
  {path:'crossfit-faq', component: CrossfitFaqComponent},
  {path:'nutrition', component: NutritionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
