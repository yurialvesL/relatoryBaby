import { Component, OnInit } from '@angular/core';
import { BabyRomper } from '../../models/baby-romper-model';

@Component({
  selector: 'app-itens-service',
  templateUrl: './itens-service.component.html',
  styleUrl: './itens-service.component.scss'
})
export class ItensServiceComponent {
     products : Array<BabyRomper> = [];
     babyRomperTest : BabyRomper = {tipo :'Body',tamanho:'M',cor:'azul',quantidade:200};
     tipo : string ='';
     tamanho: string = '';
     quantidade: number = 0
     cor: string = '';
     total: number = 0;
     unitValue:number = 0;
     quantityTotal: number = 0;

     constructor(){
       this.products.push(this.babyRomperTest);


     }

     addTable(): void {
        const babyRomper = {tipo:this.tipo,tamanho:this.tamanho,quantidade:this.quantidade,cor:this.cor};
        this.products.push(babyRomper);

        this.clearFields();
     }

     clearFields():void{
      this.tipo = '';
      this.tamanho= '';
      this.quantidade = 0;
      this.cor = '';
     }

}
