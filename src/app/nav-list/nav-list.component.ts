import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Button } from '../data/Button';
import { Router } from '@angular/router';
import buttonListData from '../data/nav-list-data.json';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {

  selectedIndex?: number;
  buttonList: Button[] = [];

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.buttonList = buttonListData as Button[];

    let button = this.buttonList.find(button => button.url == this.location.path());
    button ? button.isActive = true : null;
  }

  updateActiveButton(event: Button): void {
    this.buttonList.forEach(button => {
      if (button.index != event.index) {
        button.isActive = false;
      }
    });

    if (event.url) {
      this.navigateToRoute(event.url);
    }
  }

  navigateToRoute(url: string): void {
    this.router.navigate([url]);
  }

}
