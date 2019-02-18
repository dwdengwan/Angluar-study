import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo05-bindings',
  templateUrl: './demo05-bindings.component.html',
  styleUrls: ['./demo05-bindings.component.css']
})
export class Demo05BindingsComponent implements OnInit {
  myUrl = "http://www.baidu.com"
  uName = 'zhangsan'
  myColor = 'red'

  constructor() { }

  ngOnInit() {
  }

  // 自定义方法
  handleClick(){
    console.log("btn is clicked")
  }

  handleModelChange(){
    console.log(this.uName)
  }

}
