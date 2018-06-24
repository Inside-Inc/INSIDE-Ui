import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientVerificationAcceptedComponent } from './client-verification-accepted.component';

describe('ClientVerificationAcceptedComponent', () => {
  let component: ClientVerificationAcceptedComponent;
  let fixture: ComponentFixture<ClientVerificationAcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientVerificationAcceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientVerificationAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
