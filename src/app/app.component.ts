import { Component } from '@angular/core';
import { SocketService } from './socket.service';
import { FormBuilder, FormControl, FormGroup, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'senior';

  email = new FormControl();
  pagenum = new FormControl();

  constructor(private socketService: SocketService){}

  myFunc(){
    console.log("this.email.value: ", this.email.value);
    this.socketService.sendMessage(this.email.value)
    this.socketService.sendPageNum(this.pagenum.value)

  }
    






}
