import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LivrosDetalhesPage } from './livros-detalhes.page';

describe('LivrosDetalhesPage', () => {
  let component: LivrosDetalhesPage;
  let fixture: ComponentFixture<LivrosDetalhesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
