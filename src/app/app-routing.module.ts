import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMePanelComponent } from './panels/about-me-panel/about-me-panel.component';
import { GameDevPanelComponent } from './panels/game-dev-panel/game-dev-panel.component';
import { HomePanelComponent } from './panels/home-panel/home-panel.component';
import { MusicPanelComponent } from './panels/music-panel/music-panel.component';
import { DesignPanelComponent } from './panels/design-panel/design-panel.component';

const routes: Routes = [
  { path: '', component: HomePanelComponent },
  { path: 'about-me', component: AboutMePanelComponent },
  { path: 'game-dev', component: GameDevPanelComponent },
  { path: 'design', component: DesignPanelComponent },
  { path: 'music', component: MusicPanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
