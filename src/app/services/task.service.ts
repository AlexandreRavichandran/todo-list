import { Injectable } from '@angular/core';
import { Task } from '../task/task';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  TASKS: Task[] = [
  ]

  getTasks(): Observable<Task[]> {
    return of(this.TASKS);
  }

  editTask(task: Task): Observable<Task> {
    let taskToChange = this.TASKS.find(task => task.id === task.id);
    taskToChange = task;
    return of(task as Task);
  }

  deleteTask(id: number): Observable<Task[]> {
    this.TASKS = this.TASKS.filter(taskElement => taskElement.id !== id);
    return of(this.TASKS);
  }

  addTask(task: Task): Observable<Task[]> {
    this.TASKS.unshift(task)
    return of(this.TASKS);
  }

  getArchived() {
    const tasks = this.TASKS.filter(taskElement => taskElement.archived === true);
    return of(tasks);
  }

  getByProgress(progress: string): Observable<Task[]> {
    if (progress === 'incomplete') {
      const tasks = this.TASKS.filter(taskElement => taskElement.progress !== 100 && taskElement.archived === false);
      return of(tasks);
    } else if (progress === 'complete') {
      const tasks = this.TASKS.filter(taskElement => taskElement.progress === 100);
      return of(tasks);
    }
    return of();
  }

  getByCategory(category: string): Observable<Task[]> {
    let tasks = this.TASKS.filter(taskElement => taskElement.category === category);
    return of(tasks);
  }

  archive(id: number): Observable<Task> {
    const taskToArchive = this.TASKS.find(task => task.id === id);
    if (taskToArchive) {
      taskToArchive.archived = true;
      taskToArchive.progress = 100;
      return of(taskToArchive);
    }
    return of();
  }
}
