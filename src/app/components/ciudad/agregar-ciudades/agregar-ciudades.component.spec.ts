import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCiudadesComponent } from './agregar-ciudades.component';

describe('AgregarCiudadesComponent', () => {
  let component: AgregarCiudadesComponent;
  let fixture: ComponentFixture<AgregarCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCiudadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
