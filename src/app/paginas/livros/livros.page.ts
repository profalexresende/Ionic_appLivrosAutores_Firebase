import { Component, OnInit } from '@angular/core';
import { LivroService, Livro } from '../../services/livro.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.page.html',
  styleUrls: ['./livros.page.scss'],
})
export class LivrosPage implements OnInit {

  livros: Livro[] = [];

  constructor(private livroService: LivroService, private navCtrl: NavController) {}

  ngOnInit() {
    this.livroService.getLivros().subscribe(res => {
      this.livros = res;
    });
  }

  irParaDetalhes(livro: Livro) {
    this.navCtrl.navigateForward(`/livros-detalhes`, { queryParams: { livroId: livro.id } });
  }

  getAutoresFormatados(livro: Livro): string {
    return livro.autores && livro.autores.length > 0
      ? livro.autores.map(a => a.nome).join(', ')
      : 'Nenhum autor';
  }

}
