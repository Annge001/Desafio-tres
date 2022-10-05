import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormularioComponent } from './formulario/formulario.component';
import {ValidatorService} from "./services/validator.service";
import { LoginFormularioComponent } from './components/login-formulario/login-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    LoginFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
