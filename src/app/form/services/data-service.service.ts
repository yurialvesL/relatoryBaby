import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, asyncScheduler, of, scheduled } from 'rxjs';
import { BabyRomper } from '../models/baby-romper-model';
import { TotalsToSend } from '../models/totals-to-send';
import { ResumeTotalItens } from '../models/resume-itens-totals';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public _babyRompers: Array<BabyRomper> = [];
  private babyrompersSubject = new BehaviorSubject<Array<BabyRomper>>([]);
  public babyrompers: Observable<Array<BabyRomper>> = this.babyrompersSubject.asObservable();

  private totalSubject: BehaviorSubject<TotalsToSend> = new BehaviorSubject<TotalsToSend>({ total: 0, totalQuantity: 0 });
  public totals: Observable<TotalsToSend> = this.totalSubject.asObservable();

  public _resume:ResumeTotalItens = {totalFinal:0,totalMonetary:0,isButtonUp:undefined,isPacked:undefined,quantityTotal:0};
  private resumeSubject: BehaviorSubject<ResumeTotalItens> = new BehaviorSubject<ResumeTotalItens>({totalFinal:0,totalMonetary:0,isButtonUp:undefined,isPacked:undefined,quantityTotal:0});
  public resume: Observable<ResumeTotalItens> = this.resumeSubject.asObservable();



  setBabyRomper(product: BabyRomper): void {
    this._babyRompers.push(product);
    this.calculatetTotal();
    this.babyrompersSubject.next(this._babyRompers);
  }

  deleteBabyRomper(product: BabyRomper): void {
    let index = this._babyRompers.findIndex((baby) => baby.id === product.id);
    this._babyRompers.splice(index, 1);
    this.babyrompersSubject.next(this._babyRompers);
    this.calculatetTotal();
  }

  setResume(resume: ResumeTotalItens): void{
    this._resume = resume;
    this.resumeSubject.next(this._resume);
  }



  private calculatetTotal() {
    let quantity = 0;
    let total = 0;
    this._babyRompers.forEach(element => {
      console.log(element);
      quantity += element.quantidade!;
      total = element.unitaryValue!;
    });
    this.totalSubject.next({ total: total * quantity, totalQuantity: quantity });
  }
}
