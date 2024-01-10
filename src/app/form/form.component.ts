import { Component } from '@angular/core';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  value:string ='';
  endereco: string = '';
  phone: string= '';
  generateRelatory: boolean = true;



  teste():void{
    console.log("oi");
  }
}
