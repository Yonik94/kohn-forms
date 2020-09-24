import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class utilService {
  constructor() { }
  makeId() {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
  }
}
