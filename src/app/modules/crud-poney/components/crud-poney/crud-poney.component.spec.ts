import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPoneyComponent } from './crud-poney.component';

describe('CrudPoneyComponent', () => {
  let component: CrudPoneyComponent;
  let fixture: ComponentFixture<CrudPoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudPoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
