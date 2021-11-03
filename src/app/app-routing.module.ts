import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom Components
import { CountryComponent } from './pais/pages/country/country.component';
import { RegionComponent } from './pais/pages/region/region.component';
import { CapitalComponent } from './pais/pages/capital/capital.component';
import { CurrencyComponent } from './pais/pages/currency/currency.component';
import { ViewCountryComponent } from './pais/pages/view-country/view-country.component';

const routes: Routes = [
  {
    path:'',
    component:CountryComponent,
    pathMatch: 'full'
  },
  {
    path:'region',
    component:RegionComponent
  },
  {
    path:'capital',
    component:CapitalComponent
  },
  {
    path:'currency',
    component:CurrencyComponent
  },
  {
    path:'pais/:id',
    component:ViewCountryComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule{}
