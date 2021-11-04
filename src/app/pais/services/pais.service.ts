import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { ColDef } from 'ag-grid-community';

// Custom Interface
import { Country } from '../interfaces/pais.interface';

// Custom template ag-Grid
import { ImageGridComponent } from '../components/image-grid/image-grid.component';
import { TemplateNumberGridComponent } from '../components/template-number-grid/template-number-grid.component';
import { TemplateRouterLinkGridComponent } from '../components/template-router-link-grid/template-router-link-grid.component';
import { TemplateViewObjectGridComponent } from '../components/template-view-object-grid/template-view-object-grid.component';
import { TemplateLanguageGridComponent } from '../components/template-language-grid/template-language-grid.component';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1';

  // cellEditorFramework
  private _columnDefs: ColDef[] = [
    {headerName:'Bandera', field:'flags.svg', sortable:true, filter:true, cellRendererFramework: ImageGridComponent, checkboxSelection:true },
    {headerName:'Official', field:'name.official', sortable:true, filter:true},
    {headerName:'Nombre', field:'name.common', sortable:true, filter:true},
    {headerName:'Capital', field:'capital', sortable:true, filter:true, cellRendererFramework: TemplateViewObjectGridComponent},
    {headerName:'Region', field:'region', sortable:true, filter:true},
    {headerName:'Subregion', field:'subregion', sortable:true, filter:true},
    {headerName:'Languages', field:'languages', sortable:true, filter:true, cellRendererFramework: TemplateLanguageGridComponent},
    {headerName:'Población', field:'population', sortable:true, filter:true, cellRendererFramework: TemplateNumberGridComponent},
    {headerName:'Area', field:'area', sortable:true, filter:true, cellRendererFramework: TemplateNumberGridComponent},
    {headerName:'#', field:'cca3', sortable:true, filter:true, cellRendererFramework: TemplateRouterLinkGridComponent}
  ]

  constructor(private http:HttpClient) { }


  public get columnDefs() : ColDef[] {
    return [...this._columnDefs];
  }


  public get httpParams() : HttpParams {
    return new HttpParams().set('fields', 'name,capital,region,subregion,cca3,languages,area,population,flags');
  }


  buscarAll():Observable<Country[]>{
    const url = `${this.apiUrl}/all`;
    return this.http.get<Country[]>(url, { params:this.httpParams });
    // .pipe(
    //   tap(console.log)
    // );
  }

  buscarPais(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url, { params:this.httpParams });
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params:this.httpParams });
  }

  buscarRegion(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url, { params:this.httpParams });
  }

  buscarCurrency(termino:string):Observable<Country[]>{
    const url = `${this.apiUrl}/currency/${termino}`;
    return this.http.get<Country[]>(url, { params:this.httpParams });
  }

  buscarPaisPorCode(id:string):Observable<Country[]>{
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }
}
