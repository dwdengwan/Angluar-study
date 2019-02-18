import { Component, OnInit } from '@angular/core';
import {CommService} from '../comm.service'

@Component({
  selector: 'app-demo13-xiongda',
  templateUrl: './demo13-xiongda.component.html',
  styleUrls: ['./demo13-xiongda.component.css']
})
export class Demo13XiongdaComponent implements OnInit {
  
  constructor(private myService:CommService) { }

  ngOnInit() {
  }

  sendMsg(){
    //将要传递给熊二的数据 存在服务中
    this.myService.msg = "光头强又来砍树了"
  }

}
