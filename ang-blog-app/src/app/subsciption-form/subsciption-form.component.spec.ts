import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsciptionFormComponent } from './subsciption-form.component';

describe('SubsciptionFormComponent', () => {
  let component: SubsciptionFormComponent;
  let fixture: ComponentFixture<SubsciptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsciptionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsciptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
