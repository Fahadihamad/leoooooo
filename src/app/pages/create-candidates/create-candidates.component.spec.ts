import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCandidatesComponent } from './create-candidates.component';

describe('CreateCandidatesComponent', () => {
  let component: CreateCandidatesComponent;
  let fixture: ComponentFixture<CreateCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCandidatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
