import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

@Injectable()
export class LightsService {
  private ws: WebSocket;

  constructor(http: Http) {
    http.get('http://lights.sntx.ml/wsuri.php?json=1')
      .subscribe((res: Response) => {
        const uri = res.json();
        this.ws = new WebSocket(uri)
      });
  }

  send(option) {
    this.ws.send(JSON.stringify(option));
  }

  change(offset: number) {
    this.send({
      controller: 'Lights',
      input: { offset },
    });
  }
}
