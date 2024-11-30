import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnosButtonComponent } from './turnos-button.component';

describe('TurnosButtonComponent', () => {
  let component: TurnosButtonComponent;
  let fixture: ComponentFixture<TurnosButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurnosButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnosButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
