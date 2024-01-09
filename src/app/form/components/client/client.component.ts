import { Component } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {
  name:string = '';
  cnpj:string = '';
  address:string = '';
  phone:string = '';
}
