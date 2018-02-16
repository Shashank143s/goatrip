import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../app.service';
declare var jquery: any;
declare var $: any;
declare var PNotify:any;


@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.css']
})

export class ChatInterfaceComponent implements OnInit {
  message: Array<any> = [];
  imagesrc: any;
  openPopup: Function;
  recievedMessage: any = {
    name : '',
    imagesrc : '',
    message : ''
  };


  @ViewChild('msgInput') textarea : ElementRef;
  @ViewChild('iterableDiv') iterator : ElementRef;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getMessage().subscribe((data) => {
      this.recievedMessage = data;
      //Code to adjust scroll height automatically when a new message comes
      //this.iterator.nativeElement.lastChild();
        this.message.push(data);
        
        //PUSH A NOTIFICATION ON RECIEVING A MESSAGE
        // new Notification(this.recievedMessage.name, {
        //   icon: this.recievedMessage.imagesrc,
        //   body: this.recievedMessage.message,
        // });

        // new PNotify({
        //   title: 'Regular Notice',
        //   text: 'Check me out! I\'m a notice.'
        // });

        //Code fix for auto scroll on new incoming message
        setTimeout(()=>{
          var elem = document.getElementById('content');
          elem.scrollTop = elem.scrollHeight;
          console.log(elem.scrollTop);
        });

      // console.log(this.message);
    });
  }

  emitMessage(data) {
    // if(this.textarea.nativeElement.value !== ''){
      this.appService.sendMessage({name: localStorage.getItem('username'), message: data, imagesrc: localStorage.getItem('imagesrc') });
      // this.textarea.nativeElement.value = '';
    // }
  }

  minimizeChat() {
    $('.wrapper').css( 'display','none');
  }

  
  setPopupAction(fn: any) {
      this.openPopup = fn;
  }
}
