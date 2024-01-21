import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';

import { FormComponent } from './form.component';
import { CommonModule } from '@angular/common';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';
import { ClientComponent } from './components/client/client.component';
import { ItensServiceComponent } from './components/itens-service/itens-service.component';
import { TableModule } from 'primeng/table';
import { HeaderComponent } from './components/header/header.component';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [FormComponent,ServiceProviderComponent,ClientComponent,ItensServiceComponent,HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,InputTextModule,
    InputMaskModule,
    TableModule,
    PanelModule,
    DropdownModule,
    InputNumberModule
  ],
  exports:[
    FormComponent,
    ServiceProviderComponent,
    ClientComponent,
    ItensServiceComponent
  ]
})
export class FormModule { }
