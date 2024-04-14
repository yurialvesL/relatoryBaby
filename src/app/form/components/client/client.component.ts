import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ClientModel } from '../../models/client-model';
import { ValidatorService } from 'src/app/shared/services/validator-service.service';
import { init } from '@emailjs/browser';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent implements OnInit  {

  @Output() client = new EventEmitter();
  name: string = '';
  cnpj: string = '';
  address: string = '';
  phone: string = '';
  cep:string = '';

  constructor(private validatorService:ValidatorService){}
  ngOnInit(): void {
    this.validateCNPJ();
  }

  private sendToFormComponent(){
    let clientToSend : ClientModel={ name: this.name, cnpj:this.cnpj, cep:this.cep, address:this.address, phone: this.phone}

    this.client.emit(clientToSend);
  }

   checkChanges(): void{
    if(!(this.validatorService.validateCNPJ(this.cnpj) && this.validatorService.validarCEP(this.cep) && this.address.length>0))
      return;
    this.sendToFormComponent();

    
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
  
}
