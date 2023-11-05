import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule as MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { PadelModule } from "./padel/padel.module";

@NgModule({
  declarations: [AppComponent, ToolbarComponent, HomeComponent, FooterComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatToolbarModule, MatSlideToggleModule, AppRoutingModule, RouterModule, PadelModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
