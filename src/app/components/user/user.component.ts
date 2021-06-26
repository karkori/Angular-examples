import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor() {}

  //props
  isLogged: boolean = false;
  isRegistred: boolean = false;

  //Methods
  register() {
    this.isRegistred = true;
  }
  login() {
    if (this.isRegistred) {
      this.isLogged = true;
    }
  }

  logout() {
    this.isLogged = false;
  }
}
