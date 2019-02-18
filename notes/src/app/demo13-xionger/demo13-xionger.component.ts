import { Component, OnInit } from '@angular/core';
import {CommService} from '../comm.service'

@Component({
  selector: 'app-demo13-xionger',
  templateUrl: './demo13-xionger.component.html',
  styleUrls: ['./demo13-xionger.component.css']
})
export class Demo13XiongerComponent implements OnInit {

  constructor(private myService:CommService) { }

  ngOnInit() {
  }

  //从服务中收取数据
  rcvMsg(){
    console.log(this.myService.msg)
  }

}
