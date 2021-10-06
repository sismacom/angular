import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPaisesComponent } from './agregar-paises.component';

describe('AgregarPaisesComponent', () => {
  let component: AgregarPaisesComponent;
  let fixture: ComponentFixture<AgregarPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPaisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
