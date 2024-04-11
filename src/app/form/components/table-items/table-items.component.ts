import { Component, EventEmitter, Input, OnChanges, Output,OnInit, OnDestroy } from '@angular/core';
import { BabyRomper } from '../../models/baby-romper-model';
import { TotalsToSend } from '../../models/totals-to-send';
import { DataService } from '../../services/data-service.service';
import { Subject} from 'rxjs';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-table-items',
  templateUrl: './table-items.component.html',
  styleUrl: './table-items.component.scss'
})
export class TableItemsComponent implements OnChanges, OnInit, OnDestroy {

  @Output() close = new EventEmitter();
  products: Array<BabyRomper> = [];
  hasValue: boolean = false;
  totalQuantity: number = 0;
  total: number = 0;
  totalUnitaryValue: number = 0;
  totalFinal: number = 0;
  isButtonUp: boolean = false;
  isPacked: boolean = false;
  updateTotals: boolean = false;


  unsubscribe = new Subject<void>();
  
  constructor(private dataService: DataService){

  }
  ngOnInit(): void {
    this.dataService.babyrompers.subscribe({
      next:(value) => {
         this.products = value;
      }
    })
  }

  

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
}

  ngOnChanges(): void {
    
    this.checkValue();
  }

  checkValue() {
    if (this.products.length < 1) 
       this.close.emit(false);

  }

  addItem(product: BabyRomper): void {
    const babyRomper = { id:this.generateId(),tipo: product?.tipo, tamanho: product?.tamanho, quantidade: product?.quantidade, cor: product?.cor, unitaryValue: product?.unitaryValue };
    this.products.push(babyRomper);
    
  }

  removeItem(product: BabyRomper): void {
    console.log("deletando ele:",product);
    this.products = this.products.filter((p) => p !== product);
    this.dataService.deleteBabyRomper(product);
    this.checkValue();
  }
  
  calculateTotal() {
    let totalgeneral: number =  0;
    let totalQuantityGeneral: number = 0;
    let totalsToSendVLO: TotalsToSend= {totalQuantity: 0, total:0}

    if (this.products.length >= 1) {
      totalQuantityGeneral += this.getTotalQuantity();
      totalsToSendVLO.totalQuantity = totalQuantityGeneral;
  
      totalgeneral += this.calculateTotalBody();
      totalgeneral += this.calculateTotalShort();
      totalgeneral += this.calculateTotalLong();
      this.total = totalgeneral;
    }
    totalsToSendVLO.total = this.total; 
       
      
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

  private generateId(): string{
    return Guid.create().toString();
  }

}
