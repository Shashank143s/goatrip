import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../app.service';
declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.css']
})
export class ChatInterfaceComponent implements OnInit {
  message: Array<any> = [];
  imagesrc: any;
  @ViewChild('msgInput') textarea : ElementRef;

  constructor(private appService: AppService) {
    //this.imagesrc = localStorage.getItem('imagesrc');
  }

  ngOnInit() {
    this.appService.getMessage().subscribe((data) => {
      // console.log(data);
      this.message.push(data);
      var elem = document.getElementById('inner');
      elem.scrollTop = elem.scrollHeight;
      // console.log('mess', this.message);
      //this.message = data;
    });
  }

  emitMessage(data) {
    this.appService.sendMessage({name: localStorage.getItem('username'), message: data, imagesrc: localStorage.getItem('imagesrc') });
    this.textarea.nativeElement.value = '';
  }

  minimizeChat() {
    $('.wrapper').animate({ 'max-height': '0%'}, 'slow');
  }

}
