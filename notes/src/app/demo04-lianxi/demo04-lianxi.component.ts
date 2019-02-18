import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo04-lianxi',
  templateUrl: './demo04-lianxi.component.html',
  styleUrls: ['./demo04-lianxi.component.css']
})
export class Demo04LianxiComponent implements OnInit {
  
  // 需要一个由5个对象构成的数组
  stuList = [
    {score:80,name:'michael',sex:1},
    {score:100,name:'miller',sex:1},
    {score:30,name:'mike',sex:1},
    {score:90,name:'john',sex:1},
    {score:50,name:'lincoln',sex:1}    
  ]

  constructor() { }

  ngOnInit() {
  }

}
