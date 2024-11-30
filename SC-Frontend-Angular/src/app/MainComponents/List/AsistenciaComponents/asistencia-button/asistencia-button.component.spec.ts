import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaButtonComponent } from './asistencia-button.component';

describe('AsistenciaButtonComponent', () => {
  let component: AsistenciaButtonComponent;
  let fixture: ComponentFixture<AsistenciaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsistenciaButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsistenciaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
