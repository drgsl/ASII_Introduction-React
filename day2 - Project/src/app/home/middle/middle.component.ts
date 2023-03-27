import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {
  @Input() public inputTxt: string = "test"; 

  constructor() { }

  ngOnInit(): void {
  }

}
