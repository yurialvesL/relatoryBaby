import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BabyRomper } from '../../models/baby-romper-model';
import { TypeBabyRomper } from '../../models/type-baby-romper';
import { SizeBabyRomper } from '../../models/size-baby-romper';
import { ColorBabyRomper } from '../../models/color-baby-romper';
import { TotalsToSend } from '../../models/totals-to-send';
import { DataService } from '../../services/data-service.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-itens-service',
  templateUrl: './itens-service.component.html',
  styleUrl: './itens-service.component.scss'
})
export class ItensServiceComponent implements OnInit {

  products: Array<BabyRomper> = [];
  babyRomperToSend: BabyRomper | undefined;
  babyRomperTest: BabyRomper = { id: this.generateId(), tipo: 'Body', tamanho: 'M', cor: 'azul', quantidade: 200, unitaryValue: 0};
  types: Array<TypeBabyRomper> = [];
  typeSelected: TypeBabyRomper | undefined;
  sizes: Array<SizeBabyRomper> = [];
  sizeSelected: SizeBabyRomper | undefined;
  colors: Array<ColorBabyRomper> = [];
  colorSelected: ColorBabyRomper | undefined;

  tamanho: string | undefined;
  tipo: string | undefined;
  quantity: number | undefined;
  cor: string | undefined;
  hasValue: Boolean =  false;
  totalQuantity: number = 0;
  total: number =0;

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {


    this.types = [
      {type: 'Body'},
      {type: 'Macacão curto'},
      {type: 'Macacão Longo'},
    ];

    this.sizes = [
      {size: 'PP'},
      {size: 'P'},
      {size: 'M'},
      {size: 'G'},
      {size: 'GG'}
    ];

    this.colors = [
      {color:"Azul"},
      {color:"Azul Marinho"},
      {color:"Amarelo"},
      {color:"Branco"},
      {color:"Bege"},
      {color:"Vermelho"},
      {color:"Laranja"},
      {color:"Verde"},
      {color:"Cinza"},
      {color:"Rosa"},
      {color:"Lilás"}
    ]
  }


  blockAdd(){
    let block = true;
    if(this.typeSelected !== undefined &&  this.sizeSelected !== undefined && this.quantity !== undefined  &&  this.colorSelected !==undefined)
      block =  false;
    return block;
  }

  addItem(){
    let babyRomper: BabyRomper = {
      id:this.generateId(),
      tipo: this.typeSelected?.type, tamanho: this.sizeSelected?.size, quantidade: this.quantity, cor: this.colorSelected?.color,
      unitaryValue: 0
    };
    this.addUnitaryValue(babyRomper);
    this.dataService.setBabyRomper(babyRomper);
    this.hasValue = true; 
    this.clearFields();

  }

  addUnitaryValue(product: BabyRomper){
    switch(product.tipo){
      case 'Body':
        product.unitaryValue = 0.3;
        break;
      case 'Macacão curto':
        product.unitaryValue = 0.4;
        break;
      case 'Macacão Longo':
        product.unitaryValue = 0.4;
    }
  }
  
  clearFields(): void {
    this.typeSelected = undefined;
    this.sizeSelected = undefined;
    this.quantity = undefined;
    this.colorSelected = undefined;
  }

  checkValue(check: boolean){
    if(check)
      this.hasValue = true;
    this.hasValue = false;

  }

  getTotals(values:TotalsToSend){
    this.total = values.total;
    this.totalQuantity = values.totalQuantity;
  }

  private generateId(): string{
    return Guid.create().toString();
  }

}
