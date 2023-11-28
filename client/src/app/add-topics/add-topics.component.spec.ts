import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnswersComponent } from './add-topics.component';

describe('AddAnswersComponent', () => {
  let component: AddAnswersComponent;
  let fixture: ComponentFixture<AddAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAnswersComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
