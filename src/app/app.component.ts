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

  isPixelFont = true;

  togglePixelFont(): void {
    this.isPixelFont = !this.isPixelFont
    document.documentElement.style.setProperty('font-family', this.isPixelFont ? "pixel" : "ubuntu");
    let label = document.getElementById("mat-mdc-slide-toggle-1-label")
    if (label) {
      label.style.fontFamily = this.isPixelFont ? "pixel" : "ubuntu";
    }
  }
}
