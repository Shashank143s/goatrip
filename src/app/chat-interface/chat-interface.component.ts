import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.css']
})
export class ChatInterfaceComponent implements OnInit {
  message : any;
  constructor(private appService:AppService) { }

  ngOnInit() {
    this.appService.getMessage().subscribe((data)=>{
      this.message.push(data);
    });
  }

  emitMessage(data){
    this.appService.sendMessage({name:'Shashank', message:data, gender:'Male' });
  }

}
