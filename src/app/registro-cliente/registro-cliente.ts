import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

/** Datos del cliente tal como se envían al registrar. */
export interface Cliente {
  nombreCompleto: string;
  dni: string;
  correo: string;
  telefono: string;
  edad: number;
  aceptaTerminos: boolean;
}

@Component({
  selector: 'app-registro-cliente',
  imports: [ReactiveFormsModule],
  templateUrl: './registro-cliente.html',
  styleUrl: './registro-cliente.css',
})
export class RegistroCliente {
  private readonly fb = inject(FormBuilder).nonNullable;

  readonly form = this.fb.group({
    nombreCompleto: ['', [Validators.required, Validators.minLength(3)]],
    dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
    correo: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern(/^9\d{8}$/)]],
    edad: [null as number | null, [Validators.required, Validators.min(18), Validators.max(120)]],
    aceptaTerminos: [false, Validators.requiredTrue],
  });

  readonly clienteRegistrado = signal<Cliente | null>(null);

  /** Indica si un campo debe mostrar su error (tocado o modificado). */
  mostrarError(campo: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[campo];
    return control.invalid && (control.touched || control.dirty);
  }

  enviar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.clienteRegistrado.set(this.form.getRawValue() as Cliente);
    this.form.reset();
  }
}
