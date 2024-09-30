import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AutorService, Autor } from '../../services/autor.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-autores-detalhes',
  templateUrl: './autores-detalhes.page.html',
  styleUrls: ['./autores-detalhes.page.scss'],
})
export class AutoresDetalhesPage implements OnInit {

  autor: Autor = { nome: '' };
  autorId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private autorService: AutorService,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.autorId = this.route.snapshot.queryParamMap.get('autorId');
    if (this.autorId) {
      this.autorService.getAutores().subscribe(res => {
        const autorEncontrado = res.find(a => a.id === this.autorId);
        if (autorEncontrado) {
          this.autor = autorEncontrado;
        }
      });
    }
  }

  async salvar() {
    if (this.autorId) {
      await this.autorService.atualizarAutor(this.autorId, this.autor);
      this.exibirMensagem('Autor atualizado com sucesso!');
    } else {
      await this.autorService.adicionarAutor(this.autor);
      this.exibirMensagem('Autor adicionado com sucesso!');
    }
    this.navCtrl.navigateBack('/autores');
  }

  async remover() {
    if (this.autorId) {
      await this.autorService.removerAutor(this.autorId);
      this.exibirMensagem('Autor removido com sucesso!');
      this.navCtrl.navigateBack('/autores');
    }
  }

  async exibirMensagem(mensagem: string) {
    const toast = await this.toastCtrl.create({
      message: mensagem,
      duration: 2000
    });
    await toast.present();
  }
}
