import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { ServiceProviderComponent } from './form/components/service-provider/service-provider.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormModule } from './form/form.module';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent
    
    
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,InputTextModule,
    InputMaskModule,
    FormModule,
    TableModule,
    PanelModule,
    DropdownModule,
    InputNumberModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
