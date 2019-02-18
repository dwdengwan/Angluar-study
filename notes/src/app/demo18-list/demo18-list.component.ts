import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'

@Component({
  selector: 'app-demo18-list',
  templateUrl: './demo18-list.component.html',
  styleUrls: ['./demo18-list.component.css']
})
export class Demo18ListComponent implements OnInit {
  myList = []
  constructor(
    private myHttp:HttpClient,
    private myRouter:Router
  ) { }

  ngOnInit() {
    //发请求:HttpClient
    var url = "http://localhost:8080/product/list"
    
    this.myHttp.get(url)
    .subscribe((result:any)=>{
      console.log(result)//result.data
      this.myList = result.data
    })
  }
    
  /**
   * 跳转到demo18Detail,同时将当前商品的lid发送
   * @param id :要传送的参数
   */
  jump(id){
    this.myRouter.navigateByUrl("demo18Detail/"+id)

  }


}
