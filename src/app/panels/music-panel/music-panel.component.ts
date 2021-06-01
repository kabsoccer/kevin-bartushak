import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-panel',
  templateUrl: './music-panel.component.html',
  styleUrls: ['./music-panel.component.css']
})
export class MusicPanelComponent implements OnInit {
  @HostBinding('class') class = 'flex-grow';

  constructor() { }

  ngOnInit(): void {
  }

}
