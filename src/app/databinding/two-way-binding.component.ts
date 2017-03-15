import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-two-way-binding',
  template: `
     <h2>{{person.name}} is {{person.age}}</h2>
     <input type="text" [(ngModel)]="person.name">
     <input type="text" [(ngModel)]="person.age">
  `,
  styles: []
})
export class TwoWayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  person = {
    name: 'Robin',
    age: 29
  };

}
