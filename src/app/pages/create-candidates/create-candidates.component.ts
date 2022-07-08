import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatesService } from 'src/app/candidates.service';
import { Candidates } from '../candidates';


@Component({
  selector: 'app-create-candidates',
  templateUrl: './create-candidates.component.html',
  styleUrls: ['./create-candidates.component.css']
})
export class CreateCandidatesComponent implements OnInit {
    
  candidates: Candidates = new Candidates();
  submitted = false;

  constructor(private candidatesService: CandidatesService,
    private router: Router) { }

  ngOnInit() {
  }

  newCandidate(): void {
    this.submitted = false;
    this.candidates = new Candidates();
  }

  save() {
    this.candidatesService
    .createCandidates(this.candidates).subscribe(data => {
      console.log(data)
      this.candidates = new Candidates();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/candidates']);
  }

}
