import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo03-dirctives',
  templateUrl: './demo03-dirctives.component.html',
  styleUrls: ['./demo03-dirctives.component.css']
})
export class Demo03DirctivesComponent implements OnInit {
  list = ['商品1','商品2','商品3']
  isMember = false
  myScore = 70
  myAnswer = 'b'

  constructor() { }

  ngOnInit() {
  }

}
