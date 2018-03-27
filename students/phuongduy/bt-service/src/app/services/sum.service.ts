import { Injectable } from '@angular/core';

@Injectable()
export class SumService {

  constructor() { }
  sum(inputA: number | string, inputB: number | string){
    inputA = +inputA;
    inputB = +inputB;
    return inputA + inputB;
  }
}
