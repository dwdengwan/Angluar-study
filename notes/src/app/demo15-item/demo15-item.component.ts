import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-demo15-item',
  templateUrl: './demo15-item.component.html',
  styleUrls: ['./demo15-item.component.css']
})
export class Demo15ItemComponent implements OnInit {
  @Input() pTitle = ""
  constructor() { }

  ngOnInit() {
  }

}
