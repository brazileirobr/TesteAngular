import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { MatButtonModule, MatFabAnchor } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

import { MatDatepickerModule } from '@angular/material/datepicker'
import pt from '@angular/common/locales/pt';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextMaskModule } from 'angular2-text-mask';

import { BaseComponent } from './base.component';
import { ListarpessoasComponent } from './listarpessoas';
import { CadastroComponent } from './cadastro'
import { CadastropessoasComponent } from './cadastropessoastela';
import { TelaPrincipalComponent } from './tela-principal';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

registerLocaleData(pt, 'pt');

@NgModule({
  declarations: [
    BaseComponent,
    TelaPrincipalComponent,
    CadastropessoasComponent,
    ListarpessoasComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatMenuModule,
    MatDatepickerModule,
    MatListModule,
    HttpClientModule,
    MatNativeDateModule,
    TextMaskModule,
    RouterModule,
  ],
  providers: [
  ],
  exports:
    [
      BaseComponent,
      TelaPrincipalComponent,
      CadastropessoasComponent,
      ListarpessoasComponent,
      CadastroComponent
    ]
})
export class BaseModule { }
