import { Injectable } from '@angular/core';
import { formService } from '../form/form.service';
import { utilService } from '../util/util.service'
import httpService from '../http/http.service.js';

@Injectable({
  providedIn: 'root'
})

export class userService {
  constructor() {
  }
  private formService = new formService
  private utilService = new utilService

  async getUser(id) {
    return await httpService.get(`user/${id}`)
  }

  async addForm(userId) {
    const form = await this.formService.addForm();
    const user = await httpService.post(`user/form`, {form, userId })
    return {form, user};
  }

  async addField(user, formId) {
    await httpService.post(`form/${formId}`)
    const formIdx = user.forms.findIndex(form => form.id === formId);
    const field = this.formService.createField();
    user.forms[formIdx].fields.push(field);
    return user.forms[formIdx].fields
  }

  async getField(userId, formId, fieldId) {
    const user = await this.getUser(userId);
    const form = user.forms.find(currForm => currForm.id === formId);
    return form.fields.find(field => field.id === fieldId);
  }

  async updateTypeOfField(userId, formId, fieldId, type) {
    const field = await this.getField(userId, formId, fieldId);
    if (field) field.type = type;
    else console.log('err');
  }
  async signup(userCred) {
    const user = await httpService.post('auth/signup', userCred);
    return user;
  }

  async login(userCred) {
    const user = await httpService.post('auth/login', userCred);
    return user
  }

  async isLoggedIn() {
    const loggedInUser = await httpService.get('auth/isLoggedIn');
    return loggedInUser
  }
}

