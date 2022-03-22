import { Component, AfterViewInit, ViewChild, ElementRef, Input } from "@angular/core";
import Mapboxgl, { LngLatBounds, NavigationControl } from "mapbox-gl";
import { Map, Popup, Marker } from "mapbox-gl";
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

  ITAcademy: LargeStablishmentModel = { // Will be substituted by either the user's location or the default business (the IT Academy)
    name: "IT Academy",
    web: "bcn.cat/barcelonactiva",
    email: "itacademy@barcelonactiva.cat",
    phone: 932917610,
    activities: [
      {
        idActivity: 107007,
        activityName: "Informàtica i telecomunicació",
      },
    ],
    addresses: [
      {
        street_name: "Roc Boronat",
        number: "117-127",
        zip_code: "08018",
        district_id: "04",
        town: "BARCELONA",
        location: {
          x: 2.194060007737955,
          y: 41.40389733660671,
        },
      },
    ],
  };

  ngAfterViewInit(): void {
    // Generate map with basic config
    this.generateMap(this.ITAcademy);
  }

  ngOnChanges() {
    this.filteredResultsToPrintOnMap.forEach((result) => {
      // Create a marker for each result and add it to the map
      this.createANewMarker(result, "orange");
    });
  }

  ngOnDestroy() {
    this.currentMarkers.forEach(marker => marker.remove());
  }

  generateMap(business: LargeStablishmentModel) {
    Mapboxgl.accessToken = environment.MAPBOX_TOKEN;
    this.map = new Map({
      container: this.mapDivElement.nativeElement,
      style: "mapbox://styles/mapbox/streets-v11", // style URL }
      center: [environment.MAPBOX_ITAcademy_OBJECT.addresses[0].location.x, environment.MAPBOX_ITAcademy_OBJECT.addresses[0].location.y],
      zoom: 8
    });

    this.map.addControl(new NavigationControl());

    this.createANewMarker(business, "red");
  }

  // Function to create a maker for a single establishment (with the establishment and the marker's colour as parameters)
  createANewMarker(element: LargeStablishmentModel, markerColor: string): void {
    const popup = new Popup().setHTML(
      `<b>${element?.name}</b> </br> ${element?.addresses[0].street_name} , ${element?.addresses[0].number}`
    );

    const newIndividualMarker = new Marker({ color: markerColor })
      .setLngLat([
        element.addresses[0].location.x,
        element.addresses[0].location.y,
      ])
      .setPopup(popup)
      .addTo(this.map);

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
