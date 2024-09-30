import { Component, OnInit } from '@angular/core';

import { AutorService, Autor } from '../../services/autor.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.page.html',
  styleUrls: ['./autores.page.scss'],
})
export class AutoresPage implements OnInit {
  autores: Autor[] = [];  // Array para armazenar a lista de autores

  constructor(
    private navCtrl: NavController,  // Serviço de navegação
    private autorService: AutorService  // Serviço para lidar com os autores
  ) {}

  ngOnInit() {
    this.buscarAutores();  // Carregar a lista de autores ao iniciar a página
  }

  // Método para buscar todos os autores
  buscarAutores() {
    this.autorService.getAutores().subscribe(res => {
      this.autores = res;
    });
  }

  // Método para ir para a tela de detalhes do autor
  irParaDetalhes(autorId?: string) {
    this.navCtrl.navigateForward(`/autores-detalhes`, { queryParams: { autorId } });
  }

  // Método para ir para a tela de adicionar um novo autor
  irParaAdicionarAutor() {
    this.navCtrl.navigateForward(`/autores-detalhes`, { queryParams: { novo: true } });
  }

  // Método para remover um autor
  removerAutor(id?: string) {
    if (!id) {
      console.error('ID do autor é indefinido e não pode ser removido.');
      return;
    }

    this.autorService.removerAutor(id).then(() => {
      this.buscarAutores();  // Atualiza a lista de autores após a exclusão
    });
  }


}
