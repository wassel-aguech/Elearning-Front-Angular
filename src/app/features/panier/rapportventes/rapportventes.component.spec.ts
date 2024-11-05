import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportventesComponent } from './rapportventes.component';

describe('RapportventesComponent', () => {
  let component: RapportventesComponent;
  let fixture: ComponentFixture<RapportventesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RapportventesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportventesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
