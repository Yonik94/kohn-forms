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
  
  
  // questions = [{title: 'What is your name', type: 'radio', options: ['option1', 'option2'], isRequired: true},
  // {title: 'enter your prefered song', type: 'text', options: [], isRequired: false}];
  constructor() { }
  changeField(ev) {
    this.updateField.emit(ev)
  }
  
  ngOnInit(): void {
  }

}
