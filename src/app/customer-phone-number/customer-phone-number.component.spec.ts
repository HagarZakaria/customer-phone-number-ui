import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPhoneNumberComponent } from './customer-phone-number.component';

describe('CustomerPhoneNumberComponent', () => {
  let component: CustomerPhoneNumberComponent;
  let fixture: ComponentFixture<CustomerPhoneNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerPhoneNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
