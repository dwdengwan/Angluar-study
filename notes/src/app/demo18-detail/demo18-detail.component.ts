import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-demo18-detail',
  templateUrl: './demo18-detail.component.html',
  styleUrls: ['./demo18-detail.component.css']
})
export class Demo18DetailComponent implements OnInit {
  myId = 0
 
  constructor(private myRoute:ActivatedRoute) { }

  ngOnInit() {
    // 接收跳转时 所传来的数据，显示在p中
    this.myRoute.params.subscribe((result)=>{
        //result.id
        this.myId = result.id
    })
  }

}
