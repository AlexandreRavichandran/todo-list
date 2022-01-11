import { Injectable } from '@angular/core';
import { Task } from '../task/task';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  TASKS: Task[] = [
    {
      id: 1,
      name: "Task 1",
      category: "Category 1",
      progress: 0,
      archived: true
    },
    {
      id: 2,
      name: "Task 2",
      category: "Category 2",
      progress: 20,
      archived: false,

    },
    {
      id: 3,
      name: "Task 3",
      category: "Category 2",
      progress: 40,
      archived: false
    },
    {
      id: 4,
      name: "Task 4",
      category: "Category 2",
      progress: 100,
      archived: true
    },
    {
      id: 5,
      name: "Task 5",
      category: "Category 1",
      progress: 60,
      archived: true
    },
  ]

  getTasks(): Observable<Task[]> {
    return of(this.TASKS);
  }

  editTask(id: number): Observable<Task> {
    const task = this.TASKS.find(task => task.id === id);
    return of(task as Task);
  }

  deleteTask(id: number): Observable<Task[]> {
    this.TASKS = this.TASKS.filter(taskElement => taskElement.id !== id);
    return of(this.TASKS);
  }

  addTask(task: Task): Observable<Task[]> {
    this.TASKS.push(task)
    return of(this.TASKS);
  }
}
