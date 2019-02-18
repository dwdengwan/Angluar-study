import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class MyGuardService implements CanActivate {

  constructor() { }

  canActivate(){
    // 执行一些运算：比如判断有没有登录，有没有权限。。。
    var num = Math.random()*100
    console.log(num)
    if(num > 50){
      return true
    }else{
      return false
    }
    
  }
}
