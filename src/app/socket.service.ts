import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  email = new String()

  constructor(private socket: Socket) {}

  public passmail(){
    return this.email;
  }

  public sendMessage(message: string) {
    this.socket.emit('message', message);
    this.email = message;
  }

  public sendPageNum(pagenum: any) {
    if(pagenum%2!=0){
      pagenum = pagenum+1;
    }
    this.socket.emit('pagenum', pagenum)
  }



}
