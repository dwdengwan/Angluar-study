import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-demo17-cart',
  templateUrl: './demo17-cart.component.html',
  styleUrls: ['./demo17-cart.component.css']
})
export class Demo17CartComponent implements OnInit {
  myPrice =100
  constructor(private myRouter:Router) { }

  ngOnInit() {
  }

  /**
   * 跳转到路由地址为orderConfirm的页面
   */
  jump(){
    //vue: this.$router.push()
    this.myRouter
    .navigateByUrl('orderConfirm')
  }

  /**
   * 跳转到路由地址为submit的页面，而且将一个价格信息传递过去
   */
  submitOrder(){
      this.myRouter.navigateByUrl('submit/10')
  }

}
