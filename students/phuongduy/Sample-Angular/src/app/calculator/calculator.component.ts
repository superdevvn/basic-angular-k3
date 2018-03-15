import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    phepTinh : string = "";
    soA: number;
    soB: number;
    ketQua: number = 0;
    
  constructor() { }

  ngOnInit() {
  }
  tinh(){
    if(this.soA == null || this.soB == null){
      alert("Vui long nhap day du 2 so");
      return 0;
    } else{
    switch(this.phepTinh){
      case "cong":{
        this.ketQua = this.soA + this.soB;
        break;
      }
      case "tru":{
        this.ketQua = this.soA - this.soB;
        break;
      }
      case "nhan":{
        this.ketQua = this.soA * this.soB;
        break;
      }
      case "chia":{
        this.ketQua = this.soA / this.soB;
        break;
      }
      default:{
        alert("Vui long chon mot phep tinh");
        break;
      }
      
    }}
  
  }
}
