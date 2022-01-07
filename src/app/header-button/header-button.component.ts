import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-button',
  template: `
        <button class="btn-primary">{{name}}</button>
  `,
  styleUrls: ['./header-button.component.scss']
})
export class HeaderButtonComponent implements OnInit {
  @Input() name: any
  constructor() { }

  ngOnInit(): void {
  }

}
