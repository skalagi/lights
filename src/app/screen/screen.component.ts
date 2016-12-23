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
  private error: boolean = false;

  ngOnInit() {
    const { ws, screen: { nativeElement: canvas } } = this;

    ws.onerror = () => this.error = true;
    const player = new jsmpeg(ws, { canvas });
  }
}
