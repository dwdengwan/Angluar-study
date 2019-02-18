import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo10-father',
  templateUrl: './demo10-father.component.html',
  styleUrls: ['./demo10-father.component.css']
})
export class Demo10FatherComponent implements OnInit {
  // 需求：在当前的组件类中 通过本地变量找到子组件的组件类，然后再进行操作
  @ViewChild('mySon') sonInstance

  constructor() { }

  ngOnInit() {
    console.log(this.sonInstance.score)
  }

}
