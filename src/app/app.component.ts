import { Component, ViewChild } from '@angular/core';
import { TooltipComponent } from './tooltip/tooltip.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kevin-bartushak';

  @ViewChild('tooltip1') tooltip1!: TooltipComponent;
  @ViewChild('tooltip2') tooltip2!: TooltipComponent;
  @ViewChild('tooltip3') tooltip3!: TooltipComponent;
}
