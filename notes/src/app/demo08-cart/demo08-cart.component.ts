import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo08-cart',
  templateUrl: './demo08-cart.component.html',
  styleUrls: ['./demo08-cart.component.css']
})
export class Demo08CartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rcvMsg(msg){
    console.log("购物车收到的数据是",msg)
  }

}
