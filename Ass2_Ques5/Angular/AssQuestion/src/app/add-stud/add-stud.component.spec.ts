import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudComponent } from './add-stud.component';

describe('AddStudComponent', () => {
  let component: AddStudComponent;
  let fixture: ComponentFixture<AddStudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
