import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user-model';
import { ServiceProvider } from '../../models/service-provider';
import { ValidatorService } from 'src/app/shared/services/validator-service.service';


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
  

    constructor(private validatorService: ValidatorService){}

   sendToFormComponent() {
    let serviceProviderToSend : ServiceProvider={ name: this.name, cnpj:this.cnpj, address:this.address, phone: this.phone, cep:this.cep, cpf: this.cpf}
    if(!(this.validatorService.validateCNPJ(this.cnpj) && this.validatorService.validarCEP(this.cep) && this.validatorService.validateCPF(this.cpf)))
      return;
    this.serviceProvider.emit(serviceProviderToSend);

  }


  validateCEP(): boolean{
    if(!(this.validatorService.validarCEP(this.cep)))
      return false;
    return true;
      
  }

  validateCNPJ(): boolean{
    if(!(this.validatorService.validateCNPJ(this.cnpj)))
      return false;
    return true;
  }

  validateCPF(): boolean{
    if(!(this.validatorService.validateCPF(this.cpf)))
      return false;
    return true;
  }
}
