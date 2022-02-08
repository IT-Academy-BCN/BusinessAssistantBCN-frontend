import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor() { }

  ngAfterViewInit(): void {

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: [ 2.19516507807684, 41.40250915633661 ], // starting position [lng, lat]
      zoom: 14 // starting zoom
      });
    
    const popup = new Popup()
    .setHTML(`
      <h6>The name of the result</h6>
      <span>The activity</span>
    `);

    new Marker({color: 'red'})
    .setLngLat([ 2.19516507807684, 41.40250915633661 ])
    .setPopup( popup )
    .addTo( map )




      
  }

}
