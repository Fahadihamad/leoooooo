import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatesService } from 'src/app/candidates.service';
import { Candidates } from '../candidates';


@Component({
  selector: 'app-update-candidates',
  templateUrl: './update-candidates.component.html',
  styleUrls: ['./update-candidates.component.css']
})
export class UpdateCandidatesComponent implements OnInit {

  id: number;
  candidates: Candidates;

  constructor(private route: ActivatedRoute,private router: Router,
    private candidatesService: CandidatesService) { }

  ngOnInit() {
    this.candidates = new Candidates();

    this.id = this.route.snapshot.params['id'];
    
    this.candidatesService.getCandidates(this.id)
      .subscribe(data => {
        console.log(data)
        this.candidates = data;
      }, error => console.log(error));
  }

  updateCandidates() {
    this.candidatesService.updateCandidate(this.id, this.candidates)
      .subscribe(data => {
        console.log(data);
        this.candidates = new Candidates();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCandidates();    
  }

  gotoList() {
    this.router.navigate(['/candidates']);
  }

  }  



