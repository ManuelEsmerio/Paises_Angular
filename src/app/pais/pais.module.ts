import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AgGridModule } from 'ag-grid-angular';

import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { CurrencyComponent } from './pages/currency/currency.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { ImageGridComponent } from './components/image-grid/image-grid.component';
import { TemplateNumberGridComponent } from './components/template-number-grid/template-number-grid.component';
import { TemplateRouterLinkGridComponent } from './components/template-router-link-grid/template-router-link-grid.component';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { TemplateViewObjectGridComponent } from './components/template-view-object-grid/template-view-object-grid.component';
import { TemplateLanguageGridComponent } from './components/template-language-grid/template-language-grid.component';
import { ViewAllComponent } from './pages/view-all/view-all.component';



@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    CurrencyComponent,
    ViewCountryComponent,
    ImageGridComponent,
    TemplateNumberGridComponent,
    TemplateRouterLinkGridComponent,
    PaisTablaComponent,
    PaisInputComponent,
    TemplateViewObjectGridComponent,
    TemplateLanguageGridComponent,
    ViewAllComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AgGridModule.withComponents(
      [
        ImageGridComponent,
        TemplateNumberGridComponent,
        TemplateRouterLinkGridComponent,
        TemplateViewObjectGridComponent,
        TemplateLanguageGridComponent
      ]
    )
  ],
  exports:[
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    CurrencyComponent,
    ViewCountryComponent
  ]
})
export class PaisModule { }
