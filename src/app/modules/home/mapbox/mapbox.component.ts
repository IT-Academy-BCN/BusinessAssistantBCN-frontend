import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
  SimpleChanges,
} from "@angular/core";
import Mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import { Map, Popup, Marker } from "mapbox-gl";
import { environment } from "src/environments/environment";
import { LargeStablishmentModel } from "../../../models/large-stablishment.model";

@Component({
  selector: "app-mapbox",
  templateUrl: "./mapbox.component.html",
  styleUrls: ["./mapbox.component.css"],
})
export class MapboxComponent implements AfterViewInit {
  @ViewChild("mapDiv")
  mapDivElement!: ElementRef;
  @Input() LSDataFiltrat!: LargeStablishmentModel[];
  map!: Map;
  constructor() {}

  ngAfterViewInit(): void {
    Mapboxgl.accessToken = environment.MAPBOX_TOKEN;
    this.map = new Map({
      container: this.mapDivElement.nativeElement,
      style: "mapbox://styles/mapbox/light-v10", // style URL
      center: [2.19516507807684, 41.40250915633661], // starting position [lng, lat]
      zoom: 12, // starting zoom
    });

    const popup = new Popup();

    new Marker({ color: "red" })
      .setLngLat([2.19516507807684, 41.40250915633661])
      .setPopup(popup)
      .addTo(this.map);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("després dels canvis: ", this.LSDataFiltrat);

    // new Marker({ color: "green" })
    //   .setLngLat([2.140835, 41.391424])
    //   .addTo(this.map);

    this.LSDataFiltrat.forEach((element) => {
      console.log(
        "location: ",
        element.addresses[0].location.x,
        " - ",
        element.addresses[0].location.y
      );

      // make a marker for each element and add to the map
      new Marker({ color: "green" })
        .setLngLat([
          element.addresses[0].location.y,
          element.addresses[0].location.x,
        ])
        .addTo(this.map);
    });
  }
}
