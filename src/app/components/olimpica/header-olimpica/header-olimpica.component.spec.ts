import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOlimpicaComponent } from './header-olimpica.component';

describe('HeaderOlimpicaComponent', () => {
  let component: HeaderOlimpicaComponent;
  let fixture: ComponentFixture<HeaderOlimpicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderOlimpicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderOlimpicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
