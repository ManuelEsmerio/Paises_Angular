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
export class CountryComponent implements OnInit{

  termino:string = ""
  error: boolean = false;

  columnDefs: ColDef[] = [];
  rowData:Country[] = []

  constructor(private service:PaisService){}

  ngOnInit(): void {
    this.columnDefs = this.service.columnDefs;
  }

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

  sugerencias( termino:string ){
    this.error = false;
    //TODO: crear sugerencias
  }

}
