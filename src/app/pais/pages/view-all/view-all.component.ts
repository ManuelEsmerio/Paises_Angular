import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


//TODO: Agregar agrupaciones por region y lenguajes de manera dinamica.
@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  columnDefs:ColDef[] = [];
  rowData:Country[] = [];

  constructor( private service:PaisService ) {
    this.columnDefs = this.service.columnDefs;
   }

  ngOnInit(): void {
    this.service.buscarAll()
    .subscribe(rows => {
      this.rowData = rows;
    },
    err => console.error)
  }

}
