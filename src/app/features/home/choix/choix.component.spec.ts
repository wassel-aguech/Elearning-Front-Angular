import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixComponent } from './choix.component';

describe('ChoixComponent', () => {
  let component: ChoixComponent;
  let fixture: ComponentFixture<ChoixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
