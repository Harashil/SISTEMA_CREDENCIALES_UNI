import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionDePersonalComponent } from './distribucion-de-personal.component';

describe('DistribucionDePersonalComponent', () => {
  let component: DistribucionDePersonalComponent;
  let fixture: ComponentFixture<DistribucionDePersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistribucionDePersonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistribucionDePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
