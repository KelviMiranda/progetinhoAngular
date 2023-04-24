import { Component, DoCheck, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit,DoCheck {

  public taskList:Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() { }

  ngOnInit(): void {

  }

  ngDoCheck(): void {
    this.setLocalstage();
  }
  deleteItemTaskList(event:number):void{
    this.taskList.splice(event, 1)
  }

  deleteAllItemLisk(){
    const confirm = window.confirm("você deseja Eliminar ?")
    if(confirm){
      this.taskList = new Array()
    }
  }

  setEmitTaskList(event:string):void{
    this.taskList.push({task:event, checked: false})
  }

  validationInput(event:string, index:number){
    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja deletar ?");
      if(confirm){
        this.deleteItemTaskList(index)
      }
    }
  }

  setLocalstage(){
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
  }
}
