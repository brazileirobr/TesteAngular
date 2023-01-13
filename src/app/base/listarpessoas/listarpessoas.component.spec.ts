import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarpessoasComponent } from './listarpessoas.component';

describe('ListarpessoasComponent', () => {
  let component: ListarpessoasComponent;
  let fixture: ComponentFixture<ListarpessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarpessoasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarpessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
