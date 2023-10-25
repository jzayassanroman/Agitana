import { TipoComponent } from './tipo.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('TipoComponent', () => {
  let component: TipoComponent;
  let fixture: ComponentFixture<TipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoComponent]
    });
    fixture = TestBed.createComponent(TipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
