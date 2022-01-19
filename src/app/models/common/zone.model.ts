export class ZoneModel {

  idZone: Number;
  zoneName: string;

  constructor(element: any) {
    this.idZone = element.idZone;
    this.zoneName = element.zoneName;
  }

}
