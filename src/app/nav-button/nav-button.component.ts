import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { Button } from '../data/Button';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent implements OnInit {

  @Input() button: Button;
  @Input() isActive: boolean;
  @Output() clickEvent = new EventEmitter<Button>();

  img_url?: string;
  temp_url?: string;

  constructor() {
    this.button = {
      name: "",
      index: 0,
      base_img: "",
      active_img: "",
      pressed_img: "",
      isActive: false
    };
    this.isActive = this.button.isActive;
  }

  ngOnInit(): void {
    this.updateImg();
  }

  ngOnChanges(): void {
    this.updateImg();
  }

  press(): void {
    this.img_url = this.button.pressed_img;
  }

  unpress(): void {
    this.img_url = this.temp_url;
  }

  click(): void {
    let noChange = this.button.isActive;
    this.button.isActive = true
    this.updateImg();
    if (!noChange) {
      this.clickEvent.emit(this.button);
    }
  }

  updateImg(): void {
    this.img_url = this.button.isActive ? this.button.active_img : this.button.base_img;
    this.temp_url = this.img_url;
  }
}
