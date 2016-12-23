import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen.component';
import { ChristmasTreeButtonComponent } from './christmas-tree-button/christmas-tree-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ScreenComponent, ChristmasTreeButtonComponent],
  exports: [ScreenComponent],
})
export class ScreenModule { }
