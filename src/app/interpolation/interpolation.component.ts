import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'has-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
valor : number = 100;

antecessor () : number {
  return this.valor -1;


}


}
