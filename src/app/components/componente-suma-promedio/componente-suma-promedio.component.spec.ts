import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteSumaPromedioComponent } from './componente-suma-promedio.component';

describe('ComponenteSumaPromedioComponent', () => {
  let component: ComponenteSumaPromedioComponent;
  let fixture: ComponentFixture<ComponenteSumaPromedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteSumaPromedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteSumaPromedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
