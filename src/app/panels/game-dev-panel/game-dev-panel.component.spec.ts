import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDevPanelComponent } from './game-dev-panel.component';

describe('GameDevPanelComponent', () => {
  let component: GameDevPanelComponent;
  let fixture: ComponentFixture<GameDevPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDevPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDevPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
