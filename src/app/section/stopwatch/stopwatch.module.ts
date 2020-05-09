import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { ButtonComponent } from './button/button.component';
import { StopwatchComponent } from './stopwatch.component';
import { RouterModule } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';



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
    CommonModule,
    RouterModule
  ]
})
export class StopwatchModule { }
