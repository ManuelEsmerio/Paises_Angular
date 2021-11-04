import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

// Custom Service
import { PaisService } from '../../services/pais.service';

// Custom Interface
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
    `
      li{
        cursor:pointer;
      }
      .view{
        float: right;
      }
    `
  ]
})
export class CountryComponent implements OnInit{

  termino:string = ""
  error: boolean = false;
  validateResponse:boolean = false;

  columnDefs: ColDef[] = [];
  rowData:Country[] = []
  paisesSugeridos : Country[] = [];

  constructor(private service:PaisService){}

  ngOnInit(): void {
    this.columnDefs = this.service.columnDefs;
  }

  buscar( termino: string ){
    this.error = false;
    this.validateResponse = false;
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


  buscarCCA3(cca3:string, name:string){
    this.error = false;
    this.validateResponse = false;
    this.service.buscarPaisPorCode(cca3)
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
    this.validateResponse = true;
    this.termino = termino;
    this.service.buscarPais(termino)
    .subscribe(
      paises => {
        this.paisesSugeridos = paises.splice(0,5);
      },
      (err) => {
        this.paisesSugeridos = [];
      });
  }

}
