import { Component, OnInit } from '@angular/core';
import { BabyRomper } from '../../models/baby-romper-model';

@Component({
  selector: 'app-itens-service',
  templateUrl: './itens-service.component.html',
  styleUrl: './itens-service.component.scss'
})
export class ItensServiceComponent {
     products : Array<BabyRomper> = []
     babyRomperTest : BabyRomper = {tipo :'Body',tamanho:'M',cor:'azul',quantidade:200}
     tipo : string =''
     tamanho: string = ''
     quantidade: number = 0
     cor: string = ''

     constructor(){
       this.products.push(this.babyRomperTest);
     }
}
