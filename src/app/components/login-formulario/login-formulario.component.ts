import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidatorService} from "../../services/validator.service";

@Component({
  selector: 'app-login-formulario',
  templateUrl: './login-formulario.component.html',
  styleUrls: ['./login-formulario.component.css']
})
export class LoginFormularioComponent implements OnInit {

  formularioPersona: FormGroup;
  isEmailValid: boolean = true;

  constructor(
    private fb: FormBuilder,
    public validator: ValidatorService
  ) {
    this.formularioPersona = fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    console.log(this.formularioPersona);

  }

  loginUsuario(){
    this.validarEmail();
    this.formularioPersona.reset();

  }
  validarEmail(){
    // @ts-ignore
    this.isEmailValid = this.validator.esEmailValido(this.formularioPersona.get('email').value);
    console.log(this.formularioPersona)
  }


}

