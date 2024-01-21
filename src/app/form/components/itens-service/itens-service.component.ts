import { Component, OnInit } from '@angular/core';
import { BabyRomper } from '../../models/baby-romper-model';
import { TypeBabyRomper } from '../../models/type-baby-romper';
import { SizeBabyRomper } from '../../models/size-baby-romper';
import { ColorBabyRomper } from '../../models/color-baby-romper';

@Component({
  selector: 'app-itens-service',
  templateUrl: './itens-service.component.html',
  styleUrl: './itens-service.component.scss'
})
export class ItensServiceComponent implements OnInit {
  products: Array<BabyRomper> = [];
  babyRomperTest: BabyRomper = { tipo: 'Body', tamanho: 'M', cor: 'azul', quantidade: 200 };
  types: Array<TypeBabyRomper> = [];
  typeSelected: TypeBabyRomper | undefined;
  sizes: Array<SizeBabyRomper> = [];
  sizeSelected: SizeBabyRomper | undefined;
  colors: Array<ColorBabyRomper> = [];
  colorSelected: ColorBabyRomper | undefined;

  tamanho: string = '';
  tipo: string = '';
  quantidade: number | undefined;
  cor: string = '';
  total: number = 0;
  unitValue: number = 0;
  quantityTotal: number = 0;

  constructor() {
    this.products.push(this.babyRomperTest);
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

  addItem(): void {
    const babyRomper = { tipo: this.typeSelected?.type, tamanho: this.sizeSelected?.size, quantidade: this.quantidade, cor: this.colorSelected?.color };
    this.products.push(babyRomper);
    this.clearFields();
  }

  removeItem(product: any): void {
    this.products.pop();
  }

  clearFields(): void {
    this.typeSelected = undefined;
    this.sizeSelected = undefined;
    this.quantidade = undefined;
    this.colorSelected = undefined;
  }

}
