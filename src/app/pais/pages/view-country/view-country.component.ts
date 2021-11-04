import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [
    `
      pre{
        border: 1px solid #888;
        border-radius: 1em;
        padding: 1em;
        background-color: #333;
        color: white;
      }
    `
  ]
})
export class ViewCountryComponent implements OnInit {

  isCollapsed:boolean = false;
  pais!:Country;

  constructor(
    private activatedRoute:ActivatedRoute,
    private service:PaisService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.service.buscarPaisPorCode(id) ),
      tap( console.log )
    )
    .subscribe(resp => {
      this.pais = resp[0];
    });

    // this.activatedRoute.params
    // .subscribe( ({ id }) => {
    //   console.log(id);
    //   this.service.buscarPaisPorCode(id)
    //   .subscribe( pais => {
    //     console.log(pais);
    //   })
    // })
  }

}
