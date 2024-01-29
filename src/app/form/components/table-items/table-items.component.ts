import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { BabyRomper } from '../../models/baby-romper-model';

@Component({
  selector: 'app-table-items',
  templateUrl: './table-items.component.html',
  styleUrl: './table-items.component.scss'
})
export class TableItemsComponent implements OnChanges {


  @Input() product: BabyRomper | undefined;
  @Output()
  products: Array<BabyRomper> = [];
  hasValue: boolean = false;
  totalQuantity: number = 0;
  total: number = 0;
  totalUnitaryValue: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (this.product !== undefined)
      this.addItem(this.product);
    this.checkValue();
    this.calculateTotal();

  }

  checkValue() {
    if (this.products.length >= 1) {
      this.hasValue = true;
    }
    else {
      this.hasValue = false;
    }
  }

  addItem(product: BabyRomper): void {
    const babyRomper = { tipo: product.tipo, tamanho: product.tamanho, quantidade: product.quantidade, cor: product.cor, unitaryValue: product.unitaryValue };
    this.products.push(babyRomper);
  }

  removeItem(product: BabyRomper): void {
    this.products = this.products.filter((p) => p !== product)
    this.calculateTotal();
    this.checkValue();
  }

  calculateTotal() {
    let totalgeneral: number =  0;
    let totalQuantityGeneral: number = 0;
    if (this.products.length >= 1) {
      totalQuantityGeneral += this.getTotalQuantity();
      this.totalQuantity = totalQuantityGeneral;
      
      totalgeneral += this.calculateTotalBody();
      totalgeneral += this.calculateTotalShort();
      totalgeneral += this.calculateTotalLong();
      this.total = totalgeneral;

    }
  }

  calculateTotalBody(): number {
    let totalBody: number = 0;
    let totalQuantityBody: number = 0;

    this.products.map((x) => {
      if (x.tipo == 'Body'){
        totalBody = Number(x.unitaryValue)
        totalQuantityBody += Number(x.quantidade)
      }
    });

    return totalBody * totalQuantityBody;
  }

  calculateTotalShort(): number {
    let totalShort: number = 0;
    let totalQuantityShort: number = 0;
    
    this.products.map((x) => {
      if (x.tipo == 'Macacão curto'){
        totalShort = Number(x.unitaryValue); 
        totalQuantityShort += Number(x.quantidade);
      }
    });

    return totalShort * totalQuantityShort;
  }

  calculateTotalLong() {
    let totalLong: number = 0;
    let totalQuantityLong: number = 0;
    
    this.products.map((x) => {
      if (x.tipo == 'Macacão Longo'){
        totalLong = Number(x.unitaryValue);
        totalQuantityLong += Number(x.quantidade);
      }
        
    });

    return totalLong * totalQuantityLong;
  }

  getTotalQuantity(){
    let totalQuantity: number = 0;

    this.products.map((x) =>{
      totalQuantity += Number(x.quantidade);
    });

    return totalQuantity;
  }

}
