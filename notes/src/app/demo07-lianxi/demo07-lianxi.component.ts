import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo07-lianxi',
  templateUrl: './demo07-lianxi.component.html',
  styleUrls: ['./demo07-lianxi.component.css']
})
export class Demo07LianxiComponent implements OnInit {
  myInput = "" //完成和输入框的双向数据绑定
  myList = [] //完成和ul的绑定

  constructor() { }

  ngOnInit() {
  }

  //响应按钮点击后的行为
  handleClick(){
    //将当前输入框的值 插入到数组
    this.myList.push(this.myInput)
    //插入成功之后，清空输入框的值
    this.myInput = ""
  }

}
