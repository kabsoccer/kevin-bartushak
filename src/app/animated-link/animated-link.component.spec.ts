import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedLinkComponent } from './animated-link.component';

describe('AnimatedLinkComponent', () => {
  let component: AnimatedLinkComponent;
  let fixture: ComponentFixture<AnimatedLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
