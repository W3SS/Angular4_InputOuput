import { Injectable } from "@angular/core";

@Injectable()
export class ChatHistoryService
{
    ChatDetails()
    {
        return [
            {newmsg:3,type:"Group",by:"Vamsi"},
            {newmsg:1,type:"Private",by:"Vamsi"},
            {newmsg:2,type:"Private",by:"Deeban"},
            {newmsg:0,type:"Group",by:"Navin"},
            {newmsg:0,type:"Group",by:"Kathiresh"}
        ];
    }
}
