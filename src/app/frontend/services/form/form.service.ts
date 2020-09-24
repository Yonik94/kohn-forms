import { Injectable } from '@angular/core';
import { utilService } from '../util/util.service';
import httpService from '../http/http.service.js';

@Injectable({
  providedIn: 'root'
})
export class formService {
  utilService = new utilService

  constructor() { }
  async getForm(formId) {
    return await httpService.get(`form/${formId}`)
  }

  async addForm() {
    return await httpService.post(`form`)
  }

  async addField(formId) {
    return await httpService.post(`form/${formId}`);
  }

  async updateForm(form) {
    return await httpService.put(`form/${form._Id}`, form)
  }

  async updateField(formId, field) {
    return await httpService.put(`form/${formId}/field`, field)
    
  }

  createForm() {
    return {
      id: this.utilService.makeId(),
      title: '',
      description: '',
      fields: []
    }
  }

  createField() {
    return {
      id: this.utilService.makeId(),
      title: 'Question1',
      isRequired: false,
      type: 'multipleChoice',
    }
  }
}
