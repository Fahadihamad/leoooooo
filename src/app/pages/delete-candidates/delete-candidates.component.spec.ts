import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCandidatesComponent } from './delete-candidates.component';

describe('DeleteCandidatesComponent', () => {
  let component: DeleteCandidatesComponent;
  let fixture: ComponentFixture<DeleteCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCandidatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
