import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRegionesComponent } from './agregar-regiones.component';

describe('AgregarRegionesComponent', () => {
  let component: AgregarRegionesComponent;
  let fixture: ComponentFixture<AgregarRegionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarRegionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarRegionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
