import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';


@Injectable()
export class ChatService {
  constructor() { }
  public socket;
  
  sendMessage(message){
    this.socket.emit('add-message', message);    
  }
  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io('http://192.168.15.27:3000');
      this.socket.on('message', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  
}
