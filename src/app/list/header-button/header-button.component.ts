import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-button',
  templateUrl:'./header-button.component.html',
  styleUrls: ['./header-button.component.scss']
})
export class HeaderButtonComponent implements OnInit {
  @Input() name: any
  constructor() { }

  ngOnInit(): void {
  }

}
