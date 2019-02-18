import { Component, OnInit } from '@angular/core';
import {HeartBeatService} from '../heart-beat.service'

@Component({
  selector: 'app-demo12-lianxi',
  templateUrl: './demo12-lianxi.component.html',
  styleUrls: ['./demo12-lianxi.component.css']
})
export class Demo12LianxiComponent implements OnInit {

  constructor(private myService:HeartBeatService) { }

  ngOnInit() {
  }

  handleStart(){
    //调用心跳服务类中的方法
    this.myService.startBeat()
  }

  handleStop(){
    //调用心跳服务类中的方法
    this.myService.stopBeat()
  }

}
