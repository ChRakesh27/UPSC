import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTopicsComponent as AddTopicsComponent } from './add-topics.component';

describe('AddTopicsComponent', () => {
  let component: AddTopicsComponent;
  let fixture: ComponentFixture<AddTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTopicsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
