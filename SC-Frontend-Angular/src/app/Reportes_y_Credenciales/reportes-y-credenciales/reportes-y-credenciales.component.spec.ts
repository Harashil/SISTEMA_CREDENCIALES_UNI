import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesYCredencialesComponent } from './reportes-y-credenciales.component';

describe('ReportesYCredencialesComponent', () => {
  let component: ReportesYCredencialesComponent;
  let fixture: ComponentFixture<ReportesYCredencialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportesYCredencialesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesYCredencialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
