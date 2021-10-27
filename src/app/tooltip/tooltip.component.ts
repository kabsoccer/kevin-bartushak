import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {


  @Input() text: string = "test";
  @Input() position: string = "right";
  displayText: string = "";
  speed: number = 100;
  index: number = 0;
  visible: boolean = false;
  left: string = "15px";
  bottom: string = "-10px";

  constructor() { }

  ngOnInit(): void {
    switch(this.position) {
      case "bottom":
        this.left = "-75px";
        this.bottom = "-60px";
        break;
    }
  }

  play(that: any) {
    if (that.index < that.text.length) {
      that.displayText = that.displayText.concat(that.text.charAt(that.index))
      that.index++;
      if (!that.visible) {
        return;
      }
      setTimeout(that.play, that.speed, that);
    }
  }

  show() {
    this.visible = true;
    this.displayText = "";
    this.index = 0;
    setTimeout(() => {
      this.play(this);
    }, 500);
  }

  hide() {
    this.visible = false;
    this.displayText = "";
    this.index = 0;
  }

}
