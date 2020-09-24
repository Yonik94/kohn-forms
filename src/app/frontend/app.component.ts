import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from './services/user/user.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private route: Router) { }
  title = 'survey-app';
  UserService = new userService
  async ngOnInit() {
      const loggedInUser = await this.UserService.isLoggedIn();
      console.log({ loggedInUser });
      if (!loggedInUser) this.route.navigate(['login']);
  }
}
