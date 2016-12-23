import { Component } from '@angular/core';
import {LightsService} from "./lights.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private lights: LightsService) {}
}
