import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {


  constructor(private socket: Socket) {}



  public sendMessage(message: string) {
    // console.log("message: ", message);
    this.socket.emit('message', message);
    // console.log(this.socket.emit('message', message));
  }

  public sendPageNum(pagenum: any) {
    this.socket.emit('pagenum', pagenum)
  }



}
