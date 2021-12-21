import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {BigStablishmentsService} from "../../../services/big-stablishments.service";

@Component({
  selector: 'app-big-stablishments-page',
  templateUrl: './big-stablishments-page.component.html',
  styleUrls: ['./big-stablishments-page.component.css']
})
export class BigStablishmentsPageComponent implements OnInit, OnDestroy {


  zones$!: Subscription;
  activities$!: Subscription;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private bigstablishmentsservice: BigStablishmentsService) { }

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
