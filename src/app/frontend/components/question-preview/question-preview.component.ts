import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'question-preview',
  templateUrl: './question-preview.component.html',
  styleUrls: ['./question-preview.component.scss']
})
export class QuestionPreviewComponent implements OnInit {
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

  onDeleteField(ev){
    this.deleteField.emit(ev)
  }
  
  ngOnInit(): void {
  }

}
