import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-animated-link',
  templateUrl: './animated-link.component.html',
  styleUrls: ['./animated-link.component.css']
})
export class AnimatedLinkComponent implements OnInit {

  @Input() backImg?: string;
  @Input() reverseImg?: string;
  @Input() href?: string;

  currImg: string = "";
  display: string = "none";

  constructor() { }

  ngOnInit(): void {
    this.currImg = this.reverseImg!;
  }

  playImg(): void {
    this.currImg = this.backImg + "?q=" + new Date().getTime();
    this.display = "inline-block";
  }

  rewindImg(): void {
    this.currImg = this.reverseImg + "?q=" + new Date().getTime();
  }

}
