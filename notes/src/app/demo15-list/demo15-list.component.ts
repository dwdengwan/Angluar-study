import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-demo15-list',
  templateUrl: './demo15-list.component.html',
  styleUrls: ['./demo15-list.component.css']
})
export class Demo15ListComponent implements OnInit {
  myList = []

  constructor(private myHttp:HttpClient) { }

  ngOnInit() {
    //发送请求 HttpClient
    var url = "http://127.0.0.1:8080/product/list";

    this.myHttp
    .get(url)
    .subscribe((result:any)=>{
      console.log(result)//result.data
      this.myList = result.data;
    })
  }

}
