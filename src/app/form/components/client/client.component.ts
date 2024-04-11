import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ClientModel } from '../../models/client-model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent  {

  @Output() client = new EventEmitter();
  name: string = '';
  cnpj: string = '';
  address: string = '';
  phone: string = '';

  private sendToFormComponent() {
    let clientToSend : ClientModel={ name: this.name, cnpj:this.cnpj, address:this.address, phone: this.phone}
    this.client.emit(clientToSend);

  }

   checkChanges() {
    this.sendToFormComponent();
    
  }
  
}
