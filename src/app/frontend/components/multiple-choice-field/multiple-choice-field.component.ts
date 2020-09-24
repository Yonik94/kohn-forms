import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'multiple-choice-field',
  templateUrl: './multiple-choice-field.component.html',
  styleUrls: ['./multiple-choice-field.component.scss']
})
export class MultipleChoiceFieldComponent implements OnInit {
  @Input() field
  @Input() formId
  @Output() updateField = new EventEmitter()
  constructor() { }
  copyField;
  changeField(ev) {
    this.updateField.emit(ev)
  }

  addOption() {
    const option = {
      txt: '',
    }
    this.copyField.options.push(option);
    this.changeField(this.copyField)
  }
  
  deleteOption(idx) {
    this.copyField.options.splice(idx, 1);
    this.changeField(this.copyField);
  }

  ngOnInit(): void {
    this.copyField = JSON.parse(JSON.stringify(this.field));
  }
}
