import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-demo14-http',
  templateUrl: './demo14-http.component.html',
  styleUrls: ['./demo14-http.component.css']
})
export class Demo14HttpComponent implements OnInit {

  constructor(private myHttp:HttpClient) { }

  ngOnInit() {
  }

  sendRequest(){
    // 要用到HttpClient触发网络请求，这个类属于HttpClientModule,需要提前让当前模块依赖于HttpClientModule
    // 异步处理:rxjs
    var url = "http://jsonplaceholder.typicode.com/users"
    this.myHttp
      .get(url)
      .subscribe((result)=>{
         console.log(result) 
      })

  }

}
