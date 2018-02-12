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
  message : Array<any> = [];
  imagesrc :any;
  constructor(private appService:AppService) { 
    this.imagesrc = localStorage.getItem('imagesrc');
  }

  ngOnInit() {
    this.appService.getMessage().subscribe((data)=>{
      console.log(data);
      this.message.push(data);
      console.log('mess',this.message);
      //this.message = data;
    });
  }

  emitMessage(data){
    this.appService.sendMessage({name:'Shashank', message:data, gender:'Male' });
  }

}
