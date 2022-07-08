import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatesService } from 'src/app/candidates.service';
import { Candidates } from '../candidates';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['candidates']);
  }

}
