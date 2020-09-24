import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'field-footer',
  templateUrl: './field-footer.component.html',
  styleUrls: ['./field-footer.component.scss']
})
export class FieldFooterComponent implements OnInit {
  @Input() field
  @Output() changeFieldType = new EventEmitter();
  constructor() { }
  copyField;

  updateField() {
    this.changeFieldType.emit(this.copyField);
  }
  ngOnInit(): void {
    this.copyField = JSON.parse(JSON.stringify(this.field));
  }

}
