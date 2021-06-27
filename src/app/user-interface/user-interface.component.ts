import { Component, NgModule } from '@angular/core';
import { User, UserType } from '../interfaces/user'

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent {

  constructor() { }

  user: User = <User>{
    id: 1,
    name: "Mostafa",
    email: "mostafa@gmail.com",
    type: UserType.admin
  }

  userToString = JSON.stringify(this.user)
  
  profesion = ''

}
