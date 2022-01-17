import { Component, Input, OnInit } from '@angular/core';
import { takeLast } from 'rxjs';
import { Category } from '../category';
import { CategoryService } from '../services/category.service';
import { TaskService } from '../services/task.service';
import { Task } from './task';
@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  categories: Category[] = [];
  taskEdit!: any;

  constructor(private taskService: TaskService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.showAllTasks();
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  filterByCategory(value: string): void {
    this.taskService.getByCategory(value).subscribe(tasks => this.tasks = tasks);
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

  changeName(task: Task): void {
    this.taskEdit = task;
  }

  submitTaskEdit(value: any, task: Task): void {
    task.name = value.name;
    task.category = value.category;
    this.taskService.editTask(task).subscribe(() => this.taskEdit = undefined);

  }

  addClassIfEmpty() {
    if (this.tasks.length) {
      return false;
    }
    return true;
  }

  showArchived(): void {
    this.taskService.getArchived().subscribe(tasks => this.tasks = tasks);
  }

  showIncomplete(): void {
    this.taskService.getByProgress('incomplete').subscribe(tasks => this.tasks = tasks);
  }

  showComplete(): void {
    this.taskService.getByProgress('complete').subscribe(tasks => this.tasks = tasks);
    console.log(this.tasks);
  }

  showAllTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  archiveTask(id:number):void{
   this.taskService.archive(id).subscribe();
  }
}
