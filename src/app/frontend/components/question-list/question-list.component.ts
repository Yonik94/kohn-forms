import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent {
  @Input() fields
  @Input() formId
  @Output() updateField = new EventEmitter()
  @Output() cloneField = new EventEmitter()
  @Output() deleteField = new EventEmitter()

  constructor() { }

  changeField(ev) {
    this.updateField.emit(ev)
  }

  onCloneField(ev) {
    this.cloneField.emit(ev);
  }

  onDeleteField(ev) {
    this.deleteField.emit(ev);
  }

  ngOnInit(): void {
  }

}
