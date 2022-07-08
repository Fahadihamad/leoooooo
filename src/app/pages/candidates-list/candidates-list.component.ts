import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CandidatesService } from 'src/app/candidates.service';
import { Candidates } from '../candidates';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css']
})
export class CandidatesListComponent implements OnInit {

  candidates: Observable<Candidates[]>;
  
  constructor(private candidatesService: CandidatesService,private router: Router) { }

  ngOnInit():void  {
    this.reloadData();
  }

  reloadData() {
    this.candidates = this.candidatesService.getCandidatesList();
  }

  deleteCandidates(id: number) {
    this.candidatesService.deleteCandidates(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  candidatesDetails(id: number){
    this.router.navigate(['details', id]);
  }


}
