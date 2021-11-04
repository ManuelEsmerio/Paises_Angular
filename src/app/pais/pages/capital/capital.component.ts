import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import { ImageGridComponent } from '../../components/image-grid/image-grid.component';
import { TemplateNumberGridComponent } from '../../components/template-number-grid/template-number-grid.component';
import { TemplateRouterLinkGridComponent } from '../../components/template-router-link-grid/template-router-link-grid.component';

import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent implements OnInit{

  termino:string = ""
  error: boolean = false;

  columnDefs: ColDef[] = [];
  rowData:Country[] = [];

  constructor(private service:PaisService){}

  ngOnInit(): void {
    this.columnDefs = this.service.columnDefs;
  }

  buscar( termino: string ){
    this.error = false;
    this.termino = termino;
    this.service.buscarCapital(this.termino)
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
