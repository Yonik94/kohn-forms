import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'recent-form-list',
  templateUrl: './recent-form-list.component.html',
  styleUrls: ['./recent-form-list.component.scss']
})
export class RecentFormListComponent implements OnInit {
@Input() forms
@Output() editForm = new EventEmitter()
  constructor() { }
  onFormClick(ev) {
    this.editForm.emit(ev);
  }
  ngOnInit(): void {
  }

}
