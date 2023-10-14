import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [AppComponent, ToolbarComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatToolbarModule, MatSlideToggleModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
