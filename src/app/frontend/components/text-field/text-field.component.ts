import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {
  @Input() field
  @Input() formId
  @Output() updateField = new EventEmitter()
  constructor() { }
  changeField(ev) {
    this.updateField.emit(ev)
  }
  ngOnInit(): void {
  }

}
