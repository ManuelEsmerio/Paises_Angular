import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

// Custom Cell Format AnGrid
import { ImageGridComponent } from '../../components/image-grid/image-grid.component';
import { TemplateNumberGridComponent } from '../../components/template-number-grid/template-number-grid.component';

// Custom Service
import { PaisService } from '../../services/pais.service';

// Custom Interface
import { Country } from '../../interfaces/pais.interface';
import { TemplateRouterLinkGridComponent } from '../../components/template-router-link-grid/template-router-link-grid.component';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
  ]
})
export class CountryComponent {

  termino:string = ""
  error: boolean = false;

  columnDefs: ColDef[] = [
    {headerName:'Bandera', field:'flags.svg', sortable:true, filter:true, cellRendererFramework: ImageGridComponent },
    {headerName:'Official', field:'name.official', sortable:true, filter:true},
    {headerName:'Nombre', field:'name.common', sortable:true, filter:true},
    {headerName:'Población', field:'population', sortable:true, filter:true, cellRendererFramework: TemplateNumberGridComponent},
    {headerName:'Area', field:'area', sortable:true, filter:true, cellRendererFramework: TemplateNumberGridComponent},
    {headerName:'Continente', field:'continents', sortable:true, filter:true},
    {headerName:'#', field:'cca3', sortable:true, filter:true, cellRendererFramework: TemplateRouterLinkGridComponent}
  ]

  rowData:Country[] = []

  constructor(private service:PaisService){}

  buscar( termino: string ){
    this.error = false;
    this.termino = termino;
    this.service.buscarPais(this.termino)
    .subscribe( (item) => {
      this.rowData = item;
    },
    (err) => {
      this.error = true;
      this.rowData = [];
    }
    );
  }

}
