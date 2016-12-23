import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ScreenModule} from "./screen/screen.module";
import {LightsService} from "./lights.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    ScreenModule,
    HttpModule
  ],
  providers: [LightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
