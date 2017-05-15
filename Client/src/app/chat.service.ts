import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { Configuration } from './config';


@Injectable()
export class ChatService {
  constructor(public con: Configuration) { }
  public socket;
  
  sendMessage(message,name){
    this.socket.emit('add-message', message,name);    
  }
  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.con.UrlObj.NodeURL);
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
