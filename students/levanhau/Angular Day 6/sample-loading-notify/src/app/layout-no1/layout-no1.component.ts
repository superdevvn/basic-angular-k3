import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-layout-no1',
  templateUrl: './layout-no1.component.html',
  styleUrls: ['./layout-no1.component.css']
})
export class LayoutNo1Component implements OnInit {
  firstNumber:number;
  secondNumber:number;
  thirdNumber:number;
  fourthNumber:number;
  fifthNumber:number;
  constructor(private apiService: ApiService) { 

  }

  ngOnInit() {
  }

  Sum(){
    alert(this.apiService.sum(this.firstNumber, this.secondNumber,this.thirdNumber, this.fourthNumber, this.fifthNumber));
  }

  MaxValue(){
    alert(this.apiService.maxValue(this.firstNumber, this.secondNumber,this.thirdNumber, this.fourthNumber, this.fifthNumber))
  }
}
