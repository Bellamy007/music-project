import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  msaapDisplayTitle = true;
  msaapDisplayVolumeControls = true;
  msaapPlaylist: Track[] = [
    {
      title: 'Muse - Uprising',
      link: 'assets/music/Muse-Uprising.mp3'
    },
    {
      title: 'Jósean Log - Chachachá (Lyric Video)',
      link: 'assets/music/chachacha.mp3'
    },
    {
      title: 'BANDA MS FEAT. SNOOP DOGG - LA MALDICIÓN (Video Animado)',
      link: 'assets/music/BANDA-MS-FEAT.-SNOOP-DOGG-LA-Video-Animado.mp3'
    }
  ];
  lat: any;
  lng: any;
  constructor() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }

  ngOnInit() {
  }


}
