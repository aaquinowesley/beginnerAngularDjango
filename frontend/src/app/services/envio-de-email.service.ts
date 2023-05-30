import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvioDeEmailService {

  constructor(private http: HttpClient) {}

  enviarEmail(texto: string): void {
    const url = 'http://127.0.0.1:8000/email/';
    const params = { texto: texto };

    this.http.get(url, { params }).subscribe(
      (response) => {
        console.log('Email enviado com sucesso!');
      },
      (error) => {
        console.error('Erro ao enviar o email:', error);
      }
    );
  }
}
