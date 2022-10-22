import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudComponent } from './edit-stud.component';

describe('EditStudComponent', () => {
  let component: EditStudComponent;
  let fixture: ComponentFixture<EditStudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
