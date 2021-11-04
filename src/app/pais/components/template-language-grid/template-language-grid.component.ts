import { Component } from '@angular/core';
import { Languages } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-template-language-grid',
  templateUrl: './template-language-grid.component.html',
  styles: [
  ]
})
export class TemplateLanguageGridComponent{

  value:any;

  agInit( params:any ):void{
    // Object.values regresa los valores del Json como un arreglo.
    this.value = Object.values(params.value).join(", ");
  }

}
