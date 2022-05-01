import { Component, Input } from '@angular/core';
export type EditorType = 'add' | 'list' | 'edit';
import { Contact } from './cccontact';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-project';
  editor: EditorType = 'add';

  get showAddEditor() {
    return this.editor === 'add';
  }
  get showContactList() {
    return this.editor === 'list';
  }
  toggleEditor(type: EditorType) {
    this.editor = type;
  }
  @Input()  contactList2 : Contact [] = [
  
  ];
}
