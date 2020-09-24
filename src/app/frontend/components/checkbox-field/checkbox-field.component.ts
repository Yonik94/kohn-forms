import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss']
})
export class CheckboxFieldComponent implements OnInit {
  @Output() addOption = new EventEmitter();
  @Output() updateField = new EventEmitter();
  @Input() field
  @Input() formId
  constructor() { }

  onAddOption() {
    this.addOption.emit(this.field.id)
  }
  changeField(ev) {
    this.updateField.emit(ev)
  }

  ngOnInit(): void {
  }

}
