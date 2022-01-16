import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../services/category.service';
import { TaskService } from '../services/task.service';
@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  categories: Category[] = [];
  constructor(private taskService: TaskService, private categoryService: CategoryService) { }


  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

}
