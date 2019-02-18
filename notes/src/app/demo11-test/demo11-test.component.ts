import { Component, OnInit } from '@angular/core';
import {MyLogService} from '../my-log.service'

@Component({
  selector: 'app-demo11-test',
  templateUrl: './demo11-test.component.html',
  styleUrls: ['./demo11-test.component.css']
})
export class Demo11TestComponent implements OnInit {

  constructor(private myService:MyLogService) { }

  ngOnInit() {
  }

  handleClick(){
    //console.log('it is a log info')
    //新方案：调用日志类服务中的方法输出日志信息
    this.myService.printSth('登录成功!')
  }

}
