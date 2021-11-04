import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
    `
      ag-grid-angular{
        height: 50vh;
        min-height: 60vh;
        max-height: 100vh;
      }
    `
  ]
})
export class PaisTablaComponent {

  @Input("rowData") rowData:Country[] = [];
  @Input('columnDefs') columnDefs:ColDef[] = [];

  constructor() { }
}
