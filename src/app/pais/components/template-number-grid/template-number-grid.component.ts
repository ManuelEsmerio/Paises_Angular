import { Component } from '@angular/core';

@Component({
  selector: 'app-template-number-grid',
  templateUrl: './template-number-grid.component.html',
  styles: [
  ]
})
export class TemplateNumberGridComponent {
  params: any;

  agInit( params:any ):void{
    this.params = params;
  }
}
