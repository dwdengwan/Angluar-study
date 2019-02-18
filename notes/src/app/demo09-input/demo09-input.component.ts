import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo09-input',
  templateUrl: './demo09-input.component.html',
  styleUrls: ['./demo09-input.component.css']
})
export class Demo09InputComponent implements OnInit {
  @Input() uName = ""
  @Output() myEvent = new EventEmitter()
  myMsg = ""

  constructor() { }

  ngOnInit() {
  }

  handleClick(){
    //触发myEvent事件，并且传值
    this.myEvent.emit(this.myMsg)
  }

}
