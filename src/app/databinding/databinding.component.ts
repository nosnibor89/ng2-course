import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stringInterpolation = 'This is a string interpolation';
  numberInterpolation = 45;

  onDataBindingClicked(value: string){
    alert(value);
  }

}
