import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcourseComponent } from './newcourse.component';

describe('NewcourseComponent', () => {
  let component: NewcourseComponent;
  let fixture: ComponentFixture<NewcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewcourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
