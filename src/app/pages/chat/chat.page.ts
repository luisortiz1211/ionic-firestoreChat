import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ChatService, Message } from './../../services/chat.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
@ViewChild(IonContent) content: IonContent;

messages : Observable<Message[]>
newMsg = ' ';

  constructor(
    private chatService:ChatService,
    private  router: Router ) { }

  ngOnInit(  ) {
    this.messages = this.chatService.getChatMessages();
  }
  sendMessage(){
    this.chatService.addChatMessage(this.newMsg)
    .then(()=>{
      this.newMsg =' ';
      this.content.scrollToBottom();
    })
    }
    signOut(){
      this.chatService.signOut().then(()=>{
        this.router.navigateByUrl('/' , {replaceUrl:true});
      });
    }

}
