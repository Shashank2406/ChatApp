import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { PassService } from '../pass.service';
import { Configuration } from '../config';
declare var $:any;

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  messages = [];
  connection;
  message;
  name="Default";
  constructor(public chatService:ChatService,public getter:PassService,public con: Configuration) { }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
      console.log(message)
    })
    this.name=this.getter.get();
    var URL= this.con.UrlObj.HomeURL;
    (function() {

	    $(document).ready(function(){
      $('.message-submit').prop('disabled',true);
      $('#message').keyup(function(){
        $('.message-submit').prop('disabled', this.value == "" ? true : false);     
        })
      });  
      
      
      
      
      $('#live-chat header').on('click', function() {

		  $('.chat').slideToggle(300, 'swing');
		  $('.chat-message-counter').fadeToggle(300, 'swing');

	    });

	    $('.chat-close').on('click', function(e) {

		    e.preventDefault();
		    $('#live-chat').fadeOut(300);
        window.location.replace(URL);
	    });

    }) ();

}
  sendMessage(){
    console.log("sendMessage");
    console.log(this.message);
    this.chatService.sendMessage(this.message,this.name);
    this.message = '';
  }
  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
