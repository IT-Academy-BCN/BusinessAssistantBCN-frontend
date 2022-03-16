import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Mapboxgl from 'mapbox-gl';
import { Map, Popup, Marker } from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import {LargeStablishmentModel} from "../../models/large-stablishment.model"

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor() { }

  example:LargeStablishmentModel = {
    "name": "Compañia Roca Sanitario",
    "web": "http://www.roca.es",
    "email": "infosan@roca.net",
    "phone": null,
    "activities": [
      {
        "idActivity": 1008031,
        "activityName": "Delegacions - oficines comercials"
      },
      {
        "idActivity": 32805741,
        "activityName": "Sanitaris"
      },
      {
        "idActivity": 29302310,
        "activityName": "Com.may. materiales construccion"
      },
      {
        "idActivity": 30699721,
        "activityName": "Alquiler locales industriales"
      }
    ],
    "addresses": [
      {
        "street_name": "Av Diagonal",
        "number": "513",
        "zip_code": "08029",
        "district_id": "04",
        "town": "BARCELONA",
        "location": {
          "x": 2.1409409554701795,
          "y": 41.39149590578569

        }
      }
    ]
  }

  ngAfterViewInit(): void {
    this.generateMap(this.example);





  }

  generateMap(business:LargeStablishmentModel){//TODO Add other establishments models to business type whenever they are defined
    Mapboxgl.accessToken = environment.MAPBOX_TOKEN;
    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: [ business.addresses[0].location.x, business.addresses[0].location.y ], // starting position [lng, lat]
      zoom: 14 // starting zoom
    });

    const popup = new Popup()


    new Marker({color: 'red'})
        .setLngLat([ business.addresses[0].location.x, business.addresses[0].location.y ])
        .setPopup( popup )
        .addTo( map )





  }

}
