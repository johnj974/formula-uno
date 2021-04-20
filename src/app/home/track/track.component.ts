import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss'],
})
export class TrackComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toTracks() {
    this.router.navigate(['/tracks']);
  }
}
