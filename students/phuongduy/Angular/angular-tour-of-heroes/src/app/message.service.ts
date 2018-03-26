import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(messge: string) {
    this.messages.push(messge);
  }

  clear(){
    this.messages = [];
  }

}
