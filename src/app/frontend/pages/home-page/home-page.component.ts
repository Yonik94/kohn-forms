import { Component, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from '../../services/user/user.service'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  userId;
  constructor(private router: Router, private UserService: userService) { }
  cookie = document.cookie
  userService = new userService
  async onAddForm() {
    const {form, user} = await this.userService.addForm(this.userId);    
    this.router.navigate([`survey/${form._id}`])
  }

  async ngOnInit() {
    const loggedInUser = await this.UserService.isLoggedIn();
    this.userId = loggedInUser._id
  }

}
