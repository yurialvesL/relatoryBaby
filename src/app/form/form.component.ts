import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RelatoryModel } from './models/relatory-model';
import { ClientModel } from './models/client-model';
import { ServiceProvider } from './models/service-provider';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  relatorio: RelatoryModel | null = null;
  blockGenerateRelatory: boolean = false;
  client: ClientModel | undefined = undefined;
  openModal:boolean = false;





  getClient(client: ClientModel) {
    console.log(client);
    if (this.client !== null) {
   

    }
  }

  generate(){
    document.getElementsByClassName
  }

  getServiceProvider(serviceProvider:ServiceProvider){
    console.log("prestador de serviço",serviceProvider)
  }

  openModalGenerate(){
   
      this.openModal = true;
    
    
  }



}
