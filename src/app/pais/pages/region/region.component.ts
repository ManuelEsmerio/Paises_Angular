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
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
    `
    `
  ]
})
export class RegionComponent implements OnInit{

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = "";

  termino:string = ""
  error: boolean = false;

  columnDefs: ColDef[] = [];
  rowData:Country[] = [];

  constructor(private service:PaisService){}

  ngOnInit(): void {
    this.columnDefs = this.service.columnDefs;
  }

  activarRegion( region: string ):void{
    if (region === this.regionActiva) {return;}
    this.regionActiva = region;
    this.rowData = [];
    this.service.buscarRegion(region)
    .subscribe(rows => {
      this.rowData = rows;
    },
    err => console.error)
  }

  getClassCSS(region:string): string{
    return (region === this.regionActiva
      ? `btn btn-secondary m-1 animate__animated animate__fadeIn animate__faster`
      : `btn btn-outline-secondary m-1 animate__animated animate__fadeIn animate__faster`);
  }

}
