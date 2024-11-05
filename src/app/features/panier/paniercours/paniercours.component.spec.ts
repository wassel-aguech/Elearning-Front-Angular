import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaniercoursComponent } from './paniercours.component';

describe('PaniercoursComponent', () => {
  let component: PaniercoursComponent;
  let fixture: ComponentFixture<PaniercoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaniercoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaniercoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
