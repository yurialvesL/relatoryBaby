import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-relatory-generated-modal',
  templateUrl: './relatory-generated-modal.component.html',
  styleUrl: './relatory-generated-modal.component.scss'
})
export class RelatoryGeneratedModalComponent {
  @Input() open: boolean = false
}
