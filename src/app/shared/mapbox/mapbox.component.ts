import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
  SimpleChanges,
} from "@angular/core";
import Mapboxgl from "mapbox-gl";
import { Map, Popup, Marker } from "mapbox-gl";
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

  constructor() {}

  ITAcademy: LargeStablishmentModel = {
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
    this.generateMap(this.ITAcademy);
  }

  generateMap(business: LargeStablishmentModel) {
    //TODO Add other establishments models to business type whenever they are defined
    Mapboxgl.accessToken = environment.MAPBOX_TOKEN;
    this.map = new Map({
      container: this.mapDivElement.nativeElement,
      style: "mapbox://styles/mapbox/light-v10", // style URL
      center: [
        business.addresses[0].location.x,
        business.addresses[0].location.y,
      ], // starting position [lng, lat]
      zoom: 11, // starting zoom
    });

    this.createANewMarker(business, "red");
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log("després dels canvis: ", this.LargeEstablishmentsFilteredData);
    // console.log("els changes:", changes);

    // PER PROVES NOMÉS!
    // new Marker({ color: "green" })
    //   .setLngLat([3.8909097, 38.0554455])
    //   .addTo(this.map);

    this.LargeEstablishmentsFilteredData.forEach((element) => {

      // Create a marker for each element and add it to the map
      this.createANewMarker(element, "orange");
    });
  }

  // Create a maker for a single LargeEstablishment (with the marker colour) 
  createANewMarker(element: LargeStablishmentModel, markerColor: string): void {
    const popup = new Popup().setHTML(
      `<b>${element.name}</b> </br> ${element.addresses[0].street_name} , ${element.addresses[0].number}`
    );

    new Marker({ color: markerColor })
      .setLngLat([
        element.addresses[0].location.x,
        element.addresses[0].location.y,
      ])
      .setPopup(popup)
      .addTo(this.map);
  }
}
