import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from './services/user/user.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }
  title = 'survey-app';
  UserService = new userService
  goHome() {
    this.router.navigate([''])
  }
  async ngOnInit() {
      const loggedInUser = await this.UserService.isLoggedIn();
      if (!loggedInUser) this.router.navigate(['login']);
  }
}
