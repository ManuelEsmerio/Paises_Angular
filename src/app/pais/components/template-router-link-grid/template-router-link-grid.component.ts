import { Component } from '@angular/core';

@Component({
  selector: 'app-template-router-link-grid',
  templateUrl: './template-router-link-grid.component.html',
  styles: [
  ]
})
export class TemplateRouterLinkGridComponent{
  params: any;

  agInit( params:any ):void{
    this.params = params;
  }
}
