import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <h1 appHighlight [hightlight]="'red'" [default]="'black'" [bordered]="false"> Root component </h1>
    <!-- <fa-databinding></fa-databinding> -->
    <fa-lifecycle *ngIf="!delete" [bindable]="boundValue" >
      <p #boundContent >{{test}}</p>
    </fa-lifecycle>
    <button (click)="delete = !delete" >Click to delete</button>
    <button (click)="test = 'Changed value'" >Click to change content</button>
    <button (click)="boundValue = boundValue + 1" >Click to change binding</button>


    <h3>
      <div *appUnless="false" >Conditional Text</div>
    </h3>
  `,
  // styleUrls: ['./app.component.css']
  styles: [`
    h1{
      color: red
    }
  `]
})
export class AppComponent {




  title = 'I change it again!';

  test = 'Initial value';
  delete = false;

  boundValue = 1000;
}
