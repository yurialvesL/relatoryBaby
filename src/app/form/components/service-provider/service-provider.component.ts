import { Component } from '@angular/core';
import { User } from '../../models/user-model';


@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrl: './service-provider.component.scss'
})
export class ServiceProviderComponent {
  user: User | undefined;
  name: string = '';
  cpf: string = '';
  cnpj: string = '';
  address: string = '';
  phone: string = '';
  cep: string = '';
  






}
