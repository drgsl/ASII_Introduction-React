import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  selectedColor: number = 1;

  constructor() { }
  
  onClick(col : number){
    console.log(col)
    this.selectedColor = col;
  }

  ngOnInit(): void {
  }

}
