import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-6 text-center">
              <h1 class="display-1">404</h1>
              <p class="lead">Página não encontrada</p>
              <p>Desculpe, mas a página que você está procurando não existe.</p>
              <a routerLink="/" class="btn btn-primary">Voltar para a página inicial</a>
          </div>
      </div>
    </div>`,
})
export class NotFoundPageComponent {}
