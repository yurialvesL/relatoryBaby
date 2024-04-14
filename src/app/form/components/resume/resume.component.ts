import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { TotalService } from '../../services/total-service.service';
import { DataService } from '../../services/data-service.service';
import { Subject, takeUntil } from 'rxjs';
import { ResumeTotalItens } from '../../models/resume-itens-totals';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit, OnDestroy {

  isButtonUp: boolean = false;
  isPacked: boolean = false;
  totalqtd:number = 0;
  totalvalue: number = 0;
  totalvalueFormated: string= 'R$ ';
  totalFinal: string = 'R$ ';


  unsubscribe = new Subject<void>();
  constructor(private dataService: DataService) {
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngOnInit(): void {
    this.dataService.totals.subscribe({
      next: (value)=> {
        console.log(value.totalQuantity,value.total);

        this.totalqtd = value.totalQuantity;
        this.totalvalue = value.total;
        this.totalFinal = 'R$ '+value.total.toFixed(2);
        this.totalvalueFormated = "R$ "+value.total.toFixed(2);
        this.sendResumeToForm();
      }
    });
    
  }

  addButtonUp(): void {
    if (this.isButtonUp) {
      this.totalvalue += this.totalqtd * 0.2;
      this.totalFinal = 'R$ '+this.totalvalue.toFixed();
      this.sendResumeToForm();
      return;
    }
    this.totalvalue -= this.totalqtd * 0.2;
    this.totalFinal = 'R$ '+this.totalvalue.toFixed(2);
    this.sendResumeToForm();
  }

  addPacked(): void {
    if (this.isPacked) {
      this.totalvalue += this.totalqtd * 0.2;
      this.totalFinal = 'R$ '+this.totalvalue.toFixed(2);
      this.sendResumeToForm();
      return;
    }
    this.totalvalue -= this.totalqtd * 0.2;
    this.totalFinal = 'R$ '+this.totalvalue.toFixed(2);
    this.sendResumeToForm();
  }

  sendResumeToForm(){
    let resumeToSend: ResumeTotalItens = {quantityTotal: this.totalqtd, totalMonetary: this.totalvalue, totalFinal: this.totalvalue, isButtonUp: this.isButtonUp, isPacked: this.isPacked}
    this.dataService.setResume(resumeToSend);

  }

}
