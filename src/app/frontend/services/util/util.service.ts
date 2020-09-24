import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class utilService {
  constructor() { }
  makeId() {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
  }

  cloneObj(obj, key = 'id') {
    const clonedObj = JSON.parse(JSON.stringify(obj));
    (function updateKey(obj, key) {
      Object.keys(obj).forEach(currKey => {
        if (currKey === key) {
          obj[currKey] = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
        }
        if (obj[currKey] && typeof obj[currKey] === 'object') {
          updateKey(obj[currKey], key);
        }
      });
    })(clonedObj, key);
    return clonedObj;
  }
}
