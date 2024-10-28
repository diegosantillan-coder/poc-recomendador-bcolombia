import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterOlimpicaComponent } from './footer-olimpica.component';

describe('FooterOlimpicaComponent', () => {
  let component: FooterOlimpicaComponent;
  let fixture: ComponentFixture<FooterOlimpicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterOlimpicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterOlimpicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
