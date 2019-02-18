import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-demo17-submit',
  templateUrl: './demo17-submit.component.html',
  styleUrls: ['./demo17-submit.component.css']
})
export class Demo17SubmitComponent implements OnInit {

  constructor(private myRoute:ActivatedRoute) { }

  ngOnInit() {
    //vue: this.$route.params
    //接收路由跳转时所传来的数据
    this.myRoute.params
    .subscribe((result)=>{
      console.log(result)//result.price
    })
  }

}
