import {Component, Input, ElementRef} from '@angular/core';
import {LightsService} from "../../lights.service";

@Component({
  selector: 'app-christmas-tree-button',
  templateUrl: './christmas-tree-button.component.html',
  styleUrls: ['./christmas-tree-button.component.css']
})
export class ChristmasTreeButtonComponent {
  constructor(private el: ElementRef, private lights: LightsService) { }
  @Input() offset: number;

  ngOnInit() {
   this.el.nativeElement.addEventListener('click', this.toggle.bind(this));
  }

  toggle() {
    const { lights, offset } = this;
    lights.change(offset);
  }
}
