import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  messages = [];
  connection;
  message;
  constructor(public chatService:ChatService) { }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
      console.log(this.messages)
    })
  }
  sendMessage(){
    console.log("sendMessage");
    console.log(this.message);
    this.chatService.sendMessage(this.message);
    this.message = '';
  }
  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
