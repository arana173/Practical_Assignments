import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStudComponent } from './display-stud.component';

describe('DisplayStudComponent', () => {
  let component: DisplayStudComponent;
  let fixture: ComponentFixture<DisplayStudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayStudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
