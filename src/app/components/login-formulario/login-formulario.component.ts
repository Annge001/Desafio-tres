import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
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
