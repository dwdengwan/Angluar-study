import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo06-pipes',
  templateUrl: './demo06-pipes.component.html',
  styleUrls: ['./demo06-pipes.component.css']
})
export class Demo06PipesComponent implements OnInit {
  
  stu = {age:10,score:80,name:"goudai"}

  constructor() { }

  ngOnInit() {
  }

}
