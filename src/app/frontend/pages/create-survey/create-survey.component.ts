import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { userService } from '../../services/user/user.service'
import { formService } from '../../services/form/form.service'


@Component({
  selector: 'create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.scss']
})
export class CreateSurveyComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,
    private router: Router, private userService: userService, private formService: formService) { }
  form
  user;
  userId;


  async getForm(formId) {
    const form = await this.formService.getForm(formId)
    return form
  }

  async addField() {
    const form = await this.formService.addField(this.form._id);
    this.form = form
  }
  
  async updateField(ev) {
    const form = await this.formService.updateField(this.form._id, ev);
    this.form = form;
  }

  async updateForm() {
    const form = await this.formService.updateForm(this.form);
    this.form = form
  } 

  async ngOnInit() {
    const loggedInUser = await this.userService.isLoggedIn();
    this.userId = loggedInUser._id;
    this.user = await this.userService.getUser(this.userId);
    this.activateRoute.params.subscribe(async param => {
      if (param.id) {
        const form = await this.getForm(param.id)
        if(form) this.form = form;
      }
    });
  }
}
