import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  contentShow = false;
  counterArr = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.contentShow = !this.contentShow;
    // this.counterArr.push(this.counterArr.length + 1);
    this.counterArr.push(new Date());
  }
    
}
