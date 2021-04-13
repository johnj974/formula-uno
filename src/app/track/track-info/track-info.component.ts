import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrackModel } from 'src/app/shared/models/track.model';
import { TrackService } from 'src/app/shared/services/track.service';

@Component({
  selector: 'app-track-info',
  templateUrl: './track-info.component.html',
  styleUrls: ['./track-info.component.scss'],
})
export class TrackInfoComponent implements OnInit {
  //.
  trackInfoArray: TrackModel[];

  constructor(
    private trackService: TrackService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.trackInfoArray = this.trackService.getTrackArray();
  }

  toTrackBio(id: number, name: string) {
    this.router.navigate(['/tracks', id, name]);
  }
}
