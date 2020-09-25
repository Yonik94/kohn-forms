import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'recent-form-preview',
  templateUrl: './recent-form-preview.component.html',
  styleUrls: ['./recent-form-preview.component.scss']
})
export class RecentFormPreviewComponent implements OnInit {
  @Input() forms
  @Output() editForm = new EventEmitter()
  constructor() { }
  
  onFormClick(id) {
    this.editForm.emit(id);
  }

  onActionBtn(ev) {
    ev.stopPropagation()
  }
  ngOnInit(): void {
  }

}
