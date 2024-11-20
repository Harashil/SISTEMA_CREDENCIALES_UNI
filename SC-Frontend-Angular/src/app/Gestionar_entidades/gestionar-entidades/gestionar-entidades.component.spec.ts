import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarEntidadesComponent } from './gestionar-entidades.component';

describe('GestionarEntidadesComponent', () => {
  let component: GestionarEntidadesComponent;
  let fixture: ComponentFixture<GestionarEntidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarEntidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarEntidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
