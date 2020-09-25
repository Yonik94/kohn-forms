import { Component, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from '../../services/user/user.service'
import { formService } from '../../services/form/form.service'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  user;
  userForms;
  constructor(private router: Router, private userService: userService, private formService: formService) { }
  cookie = document.cookie
  async onAddForm() {
    const {form, user} = await this.userService.addForm(this.user._id);    
    this.router.navigate([`survey/${form._id}`])
  }

  async getForms() {
    const forms = await this.formService.query(this.user.forms);    
    console.log({forms});
    this.userForms = forms
  }

  editForm(ev) {
    this.router.navigate([`survey/${ev}`])
  }

  async ngOnInit() {
    const loggedInUser = await this.userService.isLoggedIn();
    this.user = loggedInUser;
    await this.getForms();
  }

}
