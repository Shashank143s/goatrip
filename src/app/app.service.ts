import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Injectable()
export class AppService {

  constructor(private socket: Socket) { }

  sendMessage(data){
    this.socket.emit("chat message", data);
  }
  
  getMessage() {  
    return this.socket
        .fromEvent("chat message")
        .map( data => data);
  }

}
