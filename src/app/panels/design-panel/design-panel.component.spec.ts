import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPanelComponent } from './design-panel.component';

describe('WebDesignPanelComponent', () => {
  let component: DesignPanelComponent;
  let fixture: ComponentFixture<DesignPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
