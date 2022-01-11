import { Injectable } from '@angular/core';
import { Category } from '../category';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  categories: Category[] = [
    {
      id: 1,
      name: "Category 1"
    },
    {
      id: 2,
      name: "Category 2"
    },
    {
      id: 3,
      name: "Category 3"
    },
    {
      id: 4,
      name: "Category 4"
    },
    {
      id: 5,
      name: "Category 5"
    },
    {
      id: 6,
      name: "Category 6"
    }
  ]
  constructor() { }

  getCategories(): Observable<Category[]>{
    return of(this.categories)
  }
}
