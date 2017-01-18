import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li [class]="priorityColor(task)"
          *ngFor="let task of tasks">
        {{task.description}}
        <button (click)="editTask(task)">Edit!</button>
      </li>
    </ul>
    <hr>
    <div *ngIf="selectedTask">
      <h3>{{selectedTask.description}}</h3>
      <p>Task Complete? {{selectedTask.done}}</p>
      <h3>Edit Task</h3>
      <label>Enter Task Description</label>
      <input [(ngModel)]="selectedTask.description"><br>
      <label>Enter Task Priority (1-3):</label>
      <br>
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1">1 (low priority)<br>
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2">2 (medium priority)<br>
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3">3 (high priority)<br>
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task("Finish weekend Angular homework for Epicodus course", 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];
  selectedTask = null;

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
    this.selectedTask = null;
  }

  priorityColor(task: Task) {
    var priorities = ['bg-info', 'bg-warning', 'bg-danger'];
    var priority = priorities[task.priority - 1];
    return priority ? priority : 'bg-info';
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) {}
}
