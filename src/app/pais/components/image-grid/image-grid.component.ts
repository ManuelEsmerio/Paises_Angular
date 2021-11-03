import { Component } from '@angular/core';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styles: [`
    .img-flags{
      width:50px;
    }
  `
  ]
})
export class ImageGridComponent {

  params: any;

  agInit( params:any ):void{
    this.params = params;
  }

}
