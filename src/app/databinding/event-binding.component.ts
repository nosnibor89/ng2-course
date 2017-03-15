import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClicked()">Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output('clickable') clicked = new EventEmitter<string>();

  onClicked(){
    // alert("it worked!");
    this.clicked.emit('It Works!!');
  }

}
