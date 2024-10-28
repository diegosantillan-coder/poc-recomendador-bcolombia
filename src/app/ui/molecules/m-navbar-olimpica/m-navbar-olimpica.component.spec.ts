import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MNavbarOlimpicaComponent } from './m-navbar-olimpica.component';

describe('MNavbarOlimpicaComponent', () => {
  let component: MNavbarOlimpicaComponent;
  let fixture: ComponentFixture<MNavbarOlimpicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MNavbarOlimpicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MNavbarOlimpicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
