import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  constructor(
    private trackService: TrackService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.trackSubscription = this.route.params.subscribe((params: Params) => {
      this.trackId = +params.id;
      this.track = this.trackService.onGetTrack(this.trackId);
    });
  }

  ngOnDestroy() {
    this.trackSubscription.unsubscribe();
  }
}
