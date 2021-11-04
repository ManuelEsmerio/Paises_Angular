import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter:EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce:EventEmitter<string> = new EventEmitter<string>();

  @Input() placeholder:string = '';

  debounce:Subject<string> = new Subject();

  termino:string = "";

  ngOnInit() {
    this.debounce
    .pipe(debounceTime(400))
    .subscribe(value => {
      this.onDebounce.emit( value );
    })
  }

  buscarItem(){
    this.onEnter.emit( this.termino );
  };

  keyPress(){
    this.debounce.next( this.termino );
  }

}
