import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePoneyComponent } from './create-poney.component';

describe('CreatePoneyComponent', () => {
  let component: CreatePoneyComponent;
  let fixture: ComponentFixture<CreatePoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
