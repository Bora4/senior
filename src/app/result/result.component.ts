import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  email = new String

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.email = this.socketService.passmail()
  }



}
