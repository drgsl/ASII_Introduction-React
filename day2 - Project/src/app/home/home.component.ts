import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  textSentToChildTop = "this is text from Parent (top)";
  textSentToChildMiddle = "this is text from Parent (middle)";
  textSentToChildBottom = "this is text from Parent (bottom)";
  constructor() { }
  
  ngOnInit(): void {
  }

}
