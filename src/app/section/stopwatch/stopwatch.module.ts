import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { ButtonComponent } from './button/button.component';
import { StopwatchComponent } from './stopwatch.component';



@NgModule({
  declarations: [
    TimeDisplayComponent,
    ButtonComponent,
    StopwatchComponent
  ],
  exports:[
    StopwatchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StopwatchModule { }
