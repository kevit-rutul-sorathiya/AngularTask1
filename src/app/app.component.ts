import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Task1';
  taskArr= ['Task 01','Task 02','Task 03','Task 04','Task 05','Task 06','Task 07','Task 08','Task 09','Task 10','Task 11' ];
  inputTask!:string;
  editInput!:string ;
  taskName!:string;
  indexOfElement!:number;
 
  constructor(){
  }

  ngOnInit(): void {
  }

  addTask(): void {
    if(this.inputTask.length){
      this.taskArr.push(this.inputTask);
    }else{
      alert("Enter valid input")
    }
    this.inputTask='';
  }

  deleteTask(taskName:string): void{
    this.taskArr.splice(this.taskArr.indexOf(taskName),1);
  }

  editTask(task:string): void{
    this.editInput=task;
    this.indexOfElement=this.taskArr.indexOf(task);
    this.taskName=task;
  }

  abc(name:string): void{
    this.taskArr[this.indexOfElement]=name;
    this.taskName='';
  }
}



