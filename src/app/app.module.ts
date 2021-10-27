import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { AboutMePanelComponent } from './panels/about-me-panel/about-me-panel.component';
import { DesignPanelComponent } from './panels/design-panel/design-panel.component';
import { MusicPanelComponent } from './panels/music-panel/music-panel.component';
import { GameDevPanelComponent } from './panels/game-dev-panel/game-dev-panel.component';
import { HomePanelComponent } from './panels/home-panel/home-panel.component';
import { AnimatedLinkComponent } from './animated-link/animated-link.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    NavButtonComponent,
    NavListComponent,
    AboutMePanelComponent,
    DesignPanelComponent,
    MusicPanelComponent,
    GameDevPanelComponent,
    HomePanelComponent,
    AnimatedLinkComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
