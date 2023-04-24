import { TaskList } from './../../model/task-list';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent implements OnInit {
  @Output() public emitItemTaskList = new EventEmitter();

  addTaskList!:string;

  constructor() { }

  ngOnInit(): void {
  }

  submitItemTaskList(){
    
    this.addTaskList = this.addTaskList.trim();
    if(this.addTaskList){
      this.emitItemTaskList.emit(this.addTaskList);
      this.addTaskList = '';
    }
  }
}
