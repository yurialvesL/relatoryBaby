import { Injectable } from '@angular/core';
import { BabyRomper } from '../models/baby-romper-model';

@Injectable({
  providedIn: 'root'
})
export class TotalService {
  products: Array<BabyRomper> = [];
  totalQuantity: number = 0;
  total:number = 0;
  totalFinal: number = 0;

  constructor() { }




}
