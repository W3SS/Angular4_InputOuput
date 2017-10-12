import { Component,OnInit } from '@angular/core';
import {ChatHistoryService} from './chat-history.services';

@Component({
  selector: 'chat-layout',
  styleUrls:['./chat-layout.component.css'],
  templateUrl: './chat-layout.component.html',
})

export class ChatLayout implements OnInit 
{
  Chats=[];
  constructor(private chathistory:ChatHistoryService)
  {

  }
  ngOnInit()
  {
     this.Chats=this.chathistory.ChatDetails();
  }

  MouseClick(value)
  {
      /*var x=document.getElementsByTagName("li");
      for(var i=0;i<x.length;i++)
      {
        x[i].id="li"+i;
      }
      console.log(value);
      document.getElementById(x[2].id).style.border="solid";*/
  }
}
