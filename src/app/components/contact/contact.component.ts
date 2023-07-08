import { Component } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private userService : UserService){}

  user : User = new User();
  
  onSubmit(){
    this.userService.sendInquiry(this.user).subscribe(
      (response) => {
        console.log(response);
        
      }, (error) => {
        console.log(error);
        
      }
    )
  }
}
