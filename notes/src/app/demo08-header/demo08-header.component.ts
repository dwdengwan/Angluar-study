import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo08-header',
  templateUrl: './demo08-header.component.html',
  styleUrls: ['./demo08-header.component.css']
})
export class Demo08HeaderComponent implements OnInit {
  //含义1：接收myTitle属性的值 含义2：将值保存在myTitle的变量中
  @Input() myTitle = ""
  // 含义1：触发的事件类型是myEvent 含义2：通过myEvent触发器，触发myEvent事件，所以要给它赋值
  @Output() myEvent = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  
  // 触发myEvent事件并传值(完成子--》父的通信过程)
  send(){
    this.myEvent.emit(true)
  }


}
