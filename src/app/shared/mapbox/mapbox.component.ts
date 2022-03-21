import { Component, AfterViewInit, ViewChild, ElementRef, Input } from "@angular/core";
import Mapboxgl, { GeolocateControl, NavigationControl, Map, Popup, Marker, Coordinate, LngLat } from "mapbox-gl";
import { environment } from "src/environments/environment";
import { LargeStablishmentModel } from "../../models/large-stablishment.model";

@Component({
  selector: "app-mapbox",
  templateUrl: "./mapbox.component.html",
  styleUrls: ["./mapbox.component.css"],
})
export class MapboxComponent implements AfterViewInit {
  @ViewChild("mapDiv")
  mapDivElement!: ElementRef;
  @Input() LargeEstablishmentsFilteredData!: LargeStablishmentModel[];
  map!: Map;

  constructor() { }

  ngAfterViewInit(): void {
    // Generate map with basic config
    this.generateMap();
    // Depending on if the user accepts to share their location, center the map into the user, or into the default location (IT Academy)
    this.getUsersLocation();
  }

  ngOnChanges() {
    this.LargeEstablishmentsFilteredData.forEach((element) => {
      // Create a marker for each element and add it to the map
      this.createANewMarker("orange", element);
    });
  }

  generateMap() {
    //TODO Add other establishments models to business type whenever they are defined
    Mapboxgl.accessToken = environment.MAPBOX_TOKEN;
    this.map = new Map({
      container: this.mapDivElement.nativeElement,
      style: "mapbox://styles/mapbox/light-v10", // style URL }
      center : [environment.MAPBOX_ITAcademy_OBJECT.addresses[0].location.x, environment.MAPBOX_ITAcademy_OBJECT.addresses[0].location.y],
      zoom: 6
    });

    this.map.addControl(new NavigationControl());

    // Add geolocate control to the map.
    this.map.addControl(
      new GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
      })
    );
  }

  // Function to create a maker for a single LargeEstablishment (with the marker's colour)
  createANewMarker(markerColor: string, element?: LargeStablishmentModel, coord?: GeolocationCoordinates): void {

    // Create a popup with the businesse's basic information
    const popup = new Popup().setHTML(
      `<b>${element?.name}</b> </br> ${element?.addresses[0].street_name} , ${element?.addresses[0].number}`
    );

    if (coord) { // If user has accepted to share their location
      new Marker({ color: markerColor })
        .setLngLat([coord.longitude, coord.latitude])
        .addTo(this.map);
    } else { // If user hasn't accepted to share their location
      new Marker({ color: markerColor })
        .setLngLat([element!.addresses[0].location.x, element!.addresses[0].location.y])
        .setPopup(popup)
        .addTo(this.map);
    }
  }

  getUsersLocation(): void {
    navigator.geolocation.getCurrentPosition(
      // Success callback function (if user has accepted to share their location)
      (pos) => {
        this.map.flyTo({ center: [pos.coords.longitude, pos.coords.latitude], zoom: 11 })
        this.createANewMarker("green", undefined, pos.coords);
      },
      // Error callback function (if user hasn't accepted to share their location)
      () => {
        this.map.flyTo(
          { center: [environment.MAPBOX_ITAcademy_OBJECT.addresses[0].location.x, environment.MAPBOX_ITAcademy_OBJECT.addresses[0].location.y], zoom: 11 })
        this.createANewMarker("red", environment.MAPBOX_ITAcademy_OBJECT,);
      });
  }
}
