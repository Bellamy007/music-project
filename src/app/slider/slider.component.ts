import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  msaapDisplayTitle = true;
  msaapDisplayVolumeControls = true;
  msaapPlaylist: Track[];
  displayPlayList: boolean;
  lat: any;
  lng: any;
  constructor(private musicService: MusicService) {
    this.displayPlayList = false;
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }

  ngOnInit() {
    this.musicService.getPlayList().subscribe(response => {
      this.msaapPlaylist = response;
      this.displayPlayList = true;
    });
  }


}
