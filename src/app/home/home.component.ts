import { Component } from '@angular/core';
import { SocketService } from '../socket.service';
import { FormBuilder, FormControl, FormGroup, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Book Scanner';

  myForm = new FormGroup({
  email: new FormControl(),
  pagenum: new FormControl()
  });
  


  constructor(private socketService: SocketService){}

  myFunc(){
    
    console.log("this.email.value: ", this.myForm.controls['email'].value);
    this.socketService.sendMessage(this.myForm.controls['email'].value)
    this.socketService.sendPageNum(this.myForm.controls['pagenum'].value)

  }
    






}
