import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPaisesComponent } from './listar-paises.component';

describe('ListarPaisesComponent', () => {
  let component: ListarPaisesComponent;
  let fixture: ComponentFixture<ListarPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPaisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
