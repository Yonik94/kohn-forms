import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { userService } from '../../services/user/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private UserService: userService) { }
  title = ''
  formCred = {
    userName: '',
    password: ''
  }
  async onSubmit(ev) {
    ev.stopPropagation();
    if (!this.formCred.userName || !this.formCred.password) {
      return
    }
    try {
      const user = (this.title === 'Login') ? await this.UserService.login(this.formCred) :
      await this.UserService.signup(this.formCred);
      user && this.router.navigate([''])
    }catch(err) {
      alert('invalid username or password')
    }
  }

  navigateTo(path) {
    this.router.navigate([`${path}`])
  }


  ngOnInit(): void {
    const currPath = this.route.snapshot.url[0].path;
    this.title = (currPath === 'login') ? 'Login' : 'Signup';
  }

}
