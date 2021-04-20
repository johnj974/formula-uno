import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  //.

  teamName: string[] = ['ferrari', 'williams', 'alpha', 'aston', 'alpine'];
  team: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.selectTeam();
  }

  toTeams() {
    this.router.navigate(['/teams']);
  }

  // display a differant team on load
  selectTeam() {
    let selectNumber = Math.floor(Math.random() * this.teamName.length);
    console.log(selectNumber);
    this.team = this.teamName[selectNumber];
  }
}
