import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopperListComponent } from './topper-list.component';

describe('TopperListComponent', () => {
  let component: TopperListComponent;
  let fixture: ComponentFixture<TopperListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopperListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
