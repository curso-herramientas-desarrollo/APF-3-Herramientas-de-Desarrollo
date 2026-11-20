import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';

import { RegistroCliente } from './registro-cliente';

describe('RegistroCliente', () => {
  let component: RegistroCliente;
  let fixture: ComponentFixture<RegistroCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroCliente],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroCliente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // 1. Creación del componente
  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  // 2. Formulario vacío
  it('debe iniciar con el formulario inválido', () => {
    expect(component.form.valid).toBe(false);
  });

  // 3. Validación incorrecta
  it('debe rechazar un DNI con menos de 8 dígitos', () => {
    component.form.controls.dni.setValue('1234567');

    expect(component.form.controls.dni.valid).toBe(false);
  });

  // 4. Segunda regla de negocio
  it('debe rechazar clientes menores de edad', () => {
    component.form.controls.edad.setValue(17);

    expect(component.form.controls.edad.valid).toBe(false);
  });

  // 5. Formulario válido
  it('debe aceptar un formulario completamente válido', () => {
    component.form.patchValue({
      nombreCompleto: 'Juan Perez',
      dni: '12345678',
      correo: 'juan@test.com',
      telefono: '987654321',
      edad: 25,
      aceptaTerminos: true,
    });

    expect(component.form.valid).toBe(true);
  });
});
