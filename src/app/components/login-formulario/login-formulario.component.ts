import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login-formulario',
  templateUrl: './login-formulario.component.html',
  styleUrls: ['./login-formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formularioPersona: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.formularioPersona = fb.group({
      email: new FormControl('',[]),
      password: new FormControl('',[]),
    });
  }

  ngOnInit(): void {
  }

}

export class LoginFormularioComponent {
}
