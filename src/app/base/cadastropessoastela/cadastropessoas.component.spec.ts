import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastropessoasComponent } from './cadastropessoas.component';

describe('CadastropessoasComponent', () => {
  let component: CadastropessoasComponent;
  let fixture: ComponentFixture<CadastropessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastropessoasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastropessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
