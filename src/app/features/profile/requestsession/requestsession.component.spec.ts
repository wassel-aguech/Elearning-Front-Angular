import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsessionComponent } from './requestsession.component';

describe('RequestsessionComponent', () => {
  let component: RequestsessionComponent;
  let fixture: ComponentFixture<RequestsessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestsessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
