import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaYTurnosComponent } from './asistencia-y-turnos.component';

describe('AsistenciaYTurnosComponent', () => {
  let component: AsistenciaYTurnosComponent;
  let fixture: ComponentFixture<AsistenciaYTurnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsistenciaYTurnosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsistenciaYTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
