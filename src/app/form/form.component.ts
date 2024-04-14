import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RelatoryModel } from './models/relatory-model';
import { ClientModel } from './models/client-model';
import { ServiceProvider } from './models/service-provider';
import { DataService } from './services/data-service.service';
import { BabyRomper } from './models/baby-romper-model';
import { ResumeTotalItens } from './models/resume-itens-totals';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  relatorio: RelatoryModel;
  blockGenerateRelatory: boolean = true;
  client: ClientModel | undefined = undefined;
  serviceProvider: ServiceProvider | undefined = undefined;
  resume: ResumeTotalItens = {totalFinal:0,totalMonetary:0,isButtonUp:undefined,isPacked:undefined,quantityTotal:0};
  openModal:boolean = false;

  babyRompers: Array<BabyRomper> = [];


   constructor(private dataService:DataService){
    this.dataService.babyrompers.subscribe({
      next:(value) => {
         this.babyRompers = value;
         this.validateValuesToGenerate();
      }
      
    });
    
    this.dataService.resume.subscribe({
      next:(value) =>{
        this.resume = value;
        this.validateValuesToGenerate();
        console.log('RESUMO',this.resume);
      }
    });

    this.relatorio = {
      serviceProvider: {
        name: 'Fornecedor ABC',
        cpf: '123.456.789-00',
        cnpj: '12.345.678/0001-90',
        cep: '12345-678',
        address: 'Rua Exemplo, 123',
        phone: '(11) 98765-4321'
      },
      client: {
        name: 'Cliente XYZ',
        cnpj: '98.765.432/0001-21',
        cep: '54321-987',
        address: 'Avenida Teste, 456',
        phone: '(22) 12345-6789'
      },
      BabyRompers: [
        {
          id: '1',
          tipo: 'Macacão',
          tamanho: 'M',
          quantidade: 3,
          cor: 'Azul',
          unitaryValue: 29.99
        },
        {
          id: '2',
          tipo: 'Vestido',
          tamanho: 'P',
          quantidade: 2,
          cor: 'Rosa',
          unitaryValue: 19.99
        }
      ],
      Totals: {
        quantityTotal: 5,
        totalMonetary: 129.95,
        isButtonUp: true,
        isPacked: false,
        totalFinal: 129.95
      }
    };
    
   }
  
  getClient(client: ClientModel) {
    console.log('SHNSDJKH',client);
    this.client = client;
    this.validateValuesToGenerate();
  }

  generate(){
    document.getElementsByClassName
  }

  getServiceProvider(serviceProvider:ServiceProvider){
    this.serviceProvider = serviceProvider;
    console.log("prestador de serviço",serviceProvider)
    this.validateValuesToGenerate();
  }

  openModalGenerate(){

    this.openModal = true; 
    
  }

  validateValuesToGenerate(){
    
    if(this.client !== undefined && this.serviceProvider !== undefined && this.babyRompers.length > 0)
      this.relatorio.client = this.client;
      this.relatorio.serviceProvider = this.serviceProvider!;
      this.relatorio.Totals = this.resume;
      this.relatorio.BabyRompers = this.babyRompers;

      this.blockGenerateRelatory = false;

  }

  generatePDF(){
    console.log('vou gerar o pdf')
    var doc = new jsPDF();
   
      html2canvas(document.getElementById('relatory')!)
        .then(canvas => {
          const imgData = canvas.toDataURL('image/png');
          const doc = new jsPDF();
          doc.addImage(imgData,'JPEG',10,10,195,200);
          doc.save('meu-arquivo4.pdf');
        });
  }

}
