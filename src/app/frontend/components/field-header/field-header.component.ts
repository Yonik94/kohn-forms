import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { userService } from '../../services/user/user.service';
@Component({
  selector: 'field-header',
  templateUrl: './field-header.component.html',
  styleUrls: ['./field-header.component.scss']
})
export class FieldHeaderComponent implements OnInit {
  userService = new userService
  @Input() field
  @Input() formId
  @Output() updateField = new EventEmitter();
  constructor() { }
  copyField;
  changeField() {
    this.updateField.emit(this.copyField);
  }
  // onSelectType(ev) {
  //   this.userService.updateTypeOfField('12sdwe1235', this.formId, field);
  // }

  ngOnInit(): void {
    this.copyField = JSON.parse(JSON.stringify(this.field))
  }

}
