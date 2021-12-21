import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {LargeStablishmentsService} from "../../../services/large-stablishments.service";

@Component({
  selector: 'app-large-stablishments-page',
  templateUrl: './large-stablishments-page.component.html',
  styleUrls: ['./large-stablishments-page.component.css']
})
export class LargeStablishmentsPageComponent implements OnInit, OnDestroy {


  zones$!: Subscription;
  activities$!: Subscription;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private bigstablishmentsservice: LargeStablishmentsService) { }

  ngOnInit(): void {
    this.loadMasterData();
  }

  ngOnDestroy() {
    if( this.zones$ != undefined ) this.zones$.unsubscribe();
  }

  loadMasterData(){
    this.zones$ = this.bigstablishmentsservice.getZonesBigStablishmentsToSearch().subscribe( resp => {

    });
  }

}
