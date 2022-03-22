import { Component, AfterViewInit, ViewChild, ElementRef, Input } from "@angular/core";
import Mapboxgl, { LngLatBounds, NavigationControl, GeolocateControl, Map, Popup, Marker } from "mapbox-gl";
import { environment } from "src/environments/environment";
import { LargeStablishmentModel } from '../../models/large-stablishment.model';

@Component({
  selector: "app-mapbox",
  templateUrl: "./mapbox.component.html",
  styleUrls: ["./mapbox.component.css"],
})
export class MapboxComponent implements AfterViewInit {
  @ViewChild("mapDiv")
  mapDivElement!: ElementRef;
  @Input() filteredResultsToPrintOnMap!: LargeStablishmentModel[];
  private map!: Map;
  private currentMarkers: Marker[] = [];

  constructor() { }

  ngAfterViewInit(): void {
    // Generate map with basic config
    this.generateMap();
    // Depending on if the user accepts to share their location, center the map into the user, or into the default location (IT Academy)
    this.getUsersLocation();
  }

  ngOnChanges() {
    this.filteredResultsToPrintOnMap.forEach((result) => {
      // Create a marker for each result and add it to the map
      this.createANewMarker("orange", result);
    });
  }

  ngOnDestroy() {
    this.currentMarkers.forEach(marker => marker.remove());
  }

  generateMap() {
    Mapboxgl.accessToken = environment.MAPBOX_TOKEN;
    this.map = new Map({
      container: this.mapDivElement.nativeElement,
      style: "mapbox://styles/mapbox/streets-v11", // style URL }
      center: [environment.MAPBOX_ITAcademy_OBJECT.addresses[0].location.x, environment.MAPBOX_ITAcademy_OBJECT.addresses[0].location.y],
      zoom: 8
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

  // Function to create a single marker (with the marker's colour and the business (or user's coords) as parameters)
  createANewMarker(markerColor: string, element?: LargeStablishmentModel, coord?: GeolocationCoordinates): void {

    // Create a popup with the businesse's basic information
    const popup = new Popup().setHTML(
      `<b>${element?.name}</b> </br> ${element?.addresses[0].street_name} , ${element?.addresses[0].number}`
    );

    if (coord) { // If user has accepted to share their location
      const newIndividualMarker = new Marker({ color: markerColor })
        .setLngLat([coord.longitude, coord.latitude])
        .addTo(this.map);
      this.currentMarkers.push(newIndividualMarker);
    } else { // If user hasn't accepted to share their location
      const newIndividualMarker = new Marker({ color: markerColor })
        .setLngLat([element!.addresses[0].location.x, element!.addresses[0].location.y])
        .setPopup(popup)
        .addTo(this.map);
      this.currentMarkers.push(newIndividualMarker);

      this.currentMarkers.push(newIndividualMarker);

      // MAP LÍMITS
      // Initial point 0
      const bounds = new LngLatBounds();

      // Add all the markers to the map's bounds. 
      this.currentMarkers.forEach(marker =>
        bounds.extend(marker.getLngLat()));

      // Adjust the zoom to see all the existing markers
      this.map.fitBounds(bounds, {
        padding: 50
      })
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
      }
    );
  }
}
