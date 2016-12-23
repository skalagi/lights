import {Component, OnInit, ViewChild} from '@angular/core';
declare const jsmpeg;
import 'jsmpeg';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  private ws: WebSocket = new WebSocket('ws://lights.sntx.ml:8084');
  @ViewChild('screen') private screen;

  ngOnInit() {
    const { ws, screen: { nativeElement: canvas } } = this;

    const player = new jsmpeg(ws, { canvas });
  }
}
