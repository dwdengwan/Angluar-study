import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo09-chatroom',
  templateUrl: './demo09-chatroom.component.html',
  styleUrls: ['./demo09-chatroom.component.css']
})
export class Demo09ChatroomComponent implements OnInit {
  myList = []
  constructor() { }

  ngOnInit() {
  }

  rcvMsg(msg){
    console.log("聊天室收到了消息:",msg)
    //将msg的值保存在数组中，通过循环指令到ul的li进行显示
    this.myList.push(msg)
  }

}
