import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user-model';
import { ServiceProvider } from '../../models/service-provider';


@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrl: './service-provider.component.scss'
})
export class ServiceProviderComponent {

  @Output() serviceProvider = new EventEmitter();
  user: User | undefined;
  name: string = '';
  cpf: string = '';
  cnpj: string = '';
  address: string = '';
  phone: string = '';
  cep: string = '';
  

   sendToFormComponent() {
    let serviceProviderToSend : ServiceProvider={ name: this.name, cnpj:this.cnpj, address:this.address, phone: this.phone, cep:this.cep, cpf: this.cpf}
    this.serviceProvider.emit(serviceProviderToSend);

  }
}
