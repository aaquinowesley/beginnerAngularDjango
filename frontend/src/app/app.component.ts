import { Component } from '@angular/core';
// import { EnvioDeEmailService } from './services/envio-de-email.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(
    private http: HttpClient){

  }

  enviarEmail(): void {
    const url = 'http://127.0.0.1:8000/email/';
    const params = { texto: 'Cadastro' };

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
