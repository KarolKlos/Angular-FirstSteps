import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attention',
  templateUrl: './attention.component.html',
  styleUrls: ['./attention.component.css']
})
export class AttentionComponent implements OnInit {
  counter = 0;
  counterValue:number = 0;

  constructor() { 
  }

  ngOnInit(): void {
  }
}
