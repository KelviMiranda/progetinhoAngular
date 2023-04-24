import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-button-delete-all',
  templateUrl: './todo-button-delete-all.component.html',
  styleUrls: ['./todo-button-delete-all.component.scss']
})
export class TodoButtonDeleteAllComponent implements OnInit {

  public taskList:Array<TaskList> = new Array();

  constructor() { }

  ngOnInit(): void {
  }

}
