import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo02-lianxi',
  templateUrl: './demo02-lianxi.component.html',
  styleUrls: ['./demo02-lianxi.component.css']
})
export class Demo02LianxiComponent implements OnInit {
  
  myList = [100,200,300]

  constructor() { }

  ngOnInit() {

  }

}
