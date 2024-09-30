import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Livro {
  id?: string;
  titulo: string;
  autores: { id: string, nome: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private livrosCollection = this.firestore.collection<Livro>('livros');

  constructor(private firestore: AngularFirestore) {}

  getLivros(): Observable<Livro[]> {
    return this.livrosCollection.valueChanges({ idField: 'id' });
  }

  adicionarLivro(livro: Livro) {
    return this.livrosCollection.add(livro);
  }

  atualizarLivro(id: string, livro: Livro) {
    return this.livrosCollection.doc(id).update(livro);
  }

  removerLivro(id: string) {
    return this.livrosCollection.doc(id).delete();
  }
}
