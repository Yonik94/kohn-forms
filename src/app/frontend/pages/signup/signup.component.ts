import { Component, OnInit } from '@angular/core';
import { userService } from '../../services/user/user.service'
@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupCred = {
    userName: '',
    password: ''
  }
  constructor() { }
  private UserService = new userService
  onSignup(ev) {
    ev.stopPropagation();
    this.UserService.signup(this.signupCred)
  }

  ngOnInit(): void {
  }

}
