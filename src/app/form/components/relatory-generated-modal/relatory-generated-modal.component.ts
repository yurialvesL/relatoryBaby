import { Component, Input } from '@angular/core';
import { RelatoryModel } from '../../models/relatory-model';
import { BabyRomper } from '../../models/baby-romper-model';


@Component({
  selector: 'app-relatory-generated-modal',
  templateUrl: './relatory-generated-modal.component.html',
  styleUrl: './relatory-generated-modal.component.scss'
})
export class RelatoryGeneratedModalComponent {
  @Input() open: boolean = false
  @Input()
  relatorio!: RelatoryModel;
  data: Date = new Date

  constructor(){
    console.log(this.data.toLocaleDateString('pt-BR'));
  }

  calcularTotalItem(romper: BabyRomper): number {
    return romper.quantidade! * (romper.unitaryValue || 0);
  }

}
