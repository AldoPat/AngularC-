import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  listUsuario: any[] = [
    { id: 123564, correo: 'aldpattt@hotmail.com', usuario: 'aldopattt', password: '1234', estatus: 'Activo', sexo: 'masculinp', fecha: '2020-07-25' },
    { id: 123564, correo: 'juan@hotmail.com', usuario: 'juan', password: '1234', estatus: 'inactivo', sexo: 'masculinp', fecha: '2020-07-25' },
    { id: 123564, correo: 'aldopattt@hotmail.com', usuario: 'aldopattt', password: '1234', estatus: 'inactivo', sexo: 'masculinp', fecha: '2020-07-25' },
  ];

  form: FormGroup;

  // private toastr: ToastrService
  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      correo: ['', Validators.required],
      usuario: ['', [Validators.required, Validators.minLength(7)]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      estatus: ['', Validators.required],
      sexo: ['', Validators.required],
      fecha: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarUsuario() {
    console.log(this.form);

    const tarjeta: any = {
      correo: this.form.get('correo')?.value,
      usuario: this.form.get('usuario')?.value,
      password: this.form.get('password')?.value,
      estatus: this.form.get('estatus')?.value,
      sexo: this.form.get('sexo')?.value,
      fecha: this.form.get('fecha')?.value
    }
    this.listUsuario.push(tarjeta);
    this.toastr.success('El usuario fue registrado con exito', 'Usuario Registrado');
    this.form.reset();


    // console.log(usuario);
  }

  eliminarUsuario(index: number) {
    this.listUsuario.splice(index, 1);
    this.toastr.error('La tarjeta fue eliminada con exito', '!Tarjeta eliminada');
  }

}
