import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootComponent } from './root/root.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { HeaderButtonComponent } from './list/header-button/header-button.component';
import { TaskComponent } from './task/task.component';
import { TaskService } from './services/task.service';
import { FormsModule } from '@angular/forms';
import { NoticeMessageComponent } from './list/notice-message/notice-message.component';

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    ListComponent,
    HeaderButtonComponent,
    TaskComponent,
    NoticeMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [RootComponent]
})
export class AppModule { }
