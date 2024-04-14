import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }



  validateCPF(cpf:string): boolean{
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) {
        return false;
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let soma = 0;
    let peso = 10;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * peso;
        peso--;
    }

    let resto = (soma * 10) % 11;
    if (resto === 10) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(9))) {
        return false;
    }

    soma = 0;
    peso = 11;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * peso;
        peso--;
    }

    resto = (soma * 10) % 11;
    if (resto === 10) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
  }

  validateCNPJ(cnpj:string){
    // Remover todos os caracteres não numéricos
    cnpj = cnpj.replace(/\D/g, '');

    // Verificar se o CNPJ tem 14 dígitos
    if (cnpj.length !== 14) {
        return false;
    }

    // Verificar se todos os dígitos são iguais (caso especial)
    if (/^(\d)\1{13}$/.test(cnpj)) {
        return false;
    }

    // Calcular o primeiro dígito verificador
    let soma = 0;
    let peso = 5;
    for (let i = 0; i < 12; i++) {
        soma += parseInt(cnpj.charAt(i)) * peso;
        peso = peso === 2 ? 9 : peso - 1;
    }

    let digito = 11 - (soma % 11);
    const primeiroDigitoVerificador = digito > 9 ? 0 : digito;

    // Verificar o primeiro dígito verificador
    if (parseInt(cnpj.charAt(12)) !== primeiroDigitoVerificador) {
        return false;
    }

    // Calcular o segundo dígito verificador
    soma = 0;
    peso = 6;
    for (let i = 0; i < 13; i++) {
        soma += parseInt(cnpj.charAt(i)) * peso;
        peso = peso === 2 ? 9 : peso - 1;
    }

    digito = 11 - (soma % 11);
    const segundoDigitoVerificador = digito > 9 ? 0 : digito;

    // Verificar o segundo dígito verificador
    if (parseInt(cnpj.charAt(13)) !== segundoDigitoVerificador) {
        return false;
    }

    return true;
  }


  validarCEP(cep:string){
    // Remover todos os caracteres não numéricos
    cep = cep.replace(/\D/g, '');

    // Verificar se o CEP tem 8 dígitos numéricos
    if (cep.length !== 8) {
        return false;
    }

    // Retornar true se o CEP possui apenas dígitos numéricos
    return /^[0-9]{8}$/.test(cep);
  }
}

