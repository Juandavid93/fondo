import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsSavingsComponent } from './payments-savings.component';

describe('PaymentsSavingsComponent', () => {
  let component: PaymentsSavingsComponent;
  let fixture: ComponentFixture<PaymentsSavingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsSavingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
