import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from './task';
@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  setStatusClass(percentage: number): [string] {
    if (percentage === 100) {
      return ['task__status__done'];
    }
    return ['task__status__todo'];
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task.id).subscribe(tasks => this.tasks = tasks);
  }

  displayTask(): void {
    const task: Task = {
      id: this.tasks.length + 1,
      name: 'Nouvelle tache',
      category: '',
      archived: false,
      progress: 0
    }
    this.taskService.addTask(task).subscribe(tasks => this.tasks = tasks);
  }
  addTask(): void {
    
  }
}
