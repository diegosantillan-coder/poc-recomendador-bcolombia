import { ComponentFixture, TestBed } from '@angular/core/testing';

import { THomeOlimpicaComponent } from './t-home-olimpica.component';

describe('THomeOlimpicaComponent', () => {
  let component: THomeOlimpicaComponent;
  let fixture: ComponentFixture<THomeOlimpicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [THomeOlimpicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(THomeOlimpicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
