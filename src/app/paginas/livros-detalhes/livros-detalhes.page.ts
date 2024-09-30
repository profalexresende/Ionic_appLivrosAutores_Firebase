import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService, Livro } from '../../services/livro.service';
import { AutorService, Autor } from '../../services/autor.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-livros-detalhes',
  templateUrl: './livros-detalhes.page.html',
  styleUrls: ['./livros-detalhes.page.scss'],
})
export class LivrosDetalhesPage implements OnInit {

  livro: Livro = { titulo: '', autores: [] };
  autores: Autor[] = [];
  livroId: string | null = null;
  autoresSelecionados: { id: string, nome: string }[] = [];

  constructor(
    private route: ActivatedRoute,
    private livroService: LivroService,
    private autorService: AutorService,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.livroId = this.route.snapshot.queryParamMap.get('livroId');
    this.autorService.getAutores().subscribe(res => {
      this.autores = res;
    });
    if (this.livroId) {
      this.livroService.getLivros().subscribe(res => {
        const livroEncontrado = res.find(l => l.id === this.livroId);
        if (livroEncontrado) {
          this.livro = livroEncontrado;
          this.autoresSelecionados = livroEncontrado.autores;
        }
      });
    }
  }

  async salvar() {
    this.livro.autores = this.autoresSelecionados;
    if (this.livroId) {
      await this.livroService.atualizarLivro(this.livroId, this.livro);
      this.exibirMensagem('Livro atualizado com sucesso!');
    } else {
      await this.livroService.adicionarLivro(this.livro);
      this.exibirMensagem('Livro adicionado com sucesso!');
    }
    this.navCtrl.navigateBack('/livros');
  }

  async remover() {
    if (this.livroId) {
      await this.livroService.removerLivro(this.livroId);
      this.exibirMensagem('Livro removido com sucesso!');
      this.navCtrl.navigateBack('/livros');
    }
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastCtrl.create({
      message: mensagem,
      duration: 2000
    });
    await toast.present();
  }

  selecionarAutor(event: any) {
    const selecionado = event.detail.value;
    this.autoresSelecionados = this.autores
  .filter(a => a.id && selecionado.includes(a.id))  // Filtra apenas autores com `id` definido
  .map(a => ({ id: a.id as string, nome: a.nome })); // Garante que o `id` será uma string

  }

}
