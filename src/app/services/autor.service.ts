import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Autor {
  id?: string;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private autoresCollection = this.firestore.collection<Autor>('autores');

  constructor(private firestore: AngularFirestore) {}

  getAutores(): Observable<Autor[]> {
    return this.autoresCollection.valueChanges({ idField: 'id' });
  }

  adicionarAutor(autor: Autor) {
    return this.autoresCollection.add(autor);
  }

  atualizarAutor(id: string, autor: Autor) {
    return this.autoresCollection.doc(id).update(autor);
  }

  removerAutor(id: string) {
    return this.autoresCollection.doc(id).delete();
  }
}
