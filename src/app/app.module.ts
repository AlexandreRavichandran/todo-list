import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RootComponent } from './root/root.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { HeaderButtonComponent } from './header-button/header-button.component';

@NgModule({
  declarations: [
    RootComponent,
    NavbarComponent,
    ListComponent,
    HeaderButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
