import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'field-footer',
  templateUrl: './field-footer.component.html',
  styleUrls: ['./field-footer.component.scss']
})
export class FieldFooterComponent implements OnInit {
  @Input() field
  @Output() updateField = new EventEmitter();
  @Output() cloneField = new EventEmitter();
  @Output() deleteField = new EventEmitter();
  constructor() { }
  copyField;

  changeField() {
    this.updateField.emit(this.copyField);
  }

  onCloneField() {
    this.cloneField.emit(this.copyField)
  }
  
  onDeleteField() {    
    this.deleteField.emit(this.copyField)
  }

  ngOnInit(): void {
    this.copyField = JSON.parse(JSON.stringify(this.field));
  }

}
