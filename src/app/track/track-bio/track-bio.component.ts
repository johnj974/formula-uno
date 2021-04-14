import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TrackModel } from 'src/app/shared/models/track.model';
import { TrackService } from 'src/app/shared/services/track.service';

@Component({
  selector: 'app-track-bio',
  templateUrl: './track-bio.component.html',
  styleUrls: ['./track-bio.component.scss'],
})
export class TrackBioComponent implements OnInit, OnDestroy {
  //.
  trackSubscription: Subscription;
  trackId: number;
  track: TrackModel;
  trackList: TrackModel[] = [];
  constructor(
    private trackService: TrackService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.trackSubscription = this.route.params.subscribe((params: Params) => {
      this.trackId = +params.id;
      this.track = this.trackService.onGetTrack(this.trackId);
    });

    this.trackList = this.trackService.getTrackArray();
  }

  onTrackChange(id: number, trackName: string) {
    this.router.navigate(['tracks', id, trackName]);
  }

  ngOnDestroy() {
    this.trackSubscription.unsubscribe();
  }
}
