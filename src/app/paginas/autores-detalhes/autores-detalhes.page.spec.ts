import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoresDetalhesPage } from './autores-detalhes.page';

describe('AutoresDetalhesPage', () => {
  let component: AutoresDetalhesPage;
  let fixture: ComponentFixture<AutoresDetalhesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
