import { Component } from '@angular/core';

@Component({
  selector: 'app-template-view-object-grid',
  templateUrl: './template-view-object-grid.component.html',
  styles: [
  ]
})
export class TemplateViewObjectGridComponent {
  params:any;

  agInit( params:any ):void{
    this.params = params;
  }
}
