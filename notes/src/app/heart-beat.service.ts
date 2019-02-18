import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeartBeatService {
  timer = null
  isRunning = false

  constructor() { }

  // 封装两个自定义的方法
  startBeat(){
    if(this.isRunning){
      return
    }
    this.timer =  setInterval(()=>{
      console.log('正在心跳....')
    },500)
    this.isRunning = true
  }

  stopBeat(){
    clearInterval(this.timer)
    this.isRunning = false
  }
}
