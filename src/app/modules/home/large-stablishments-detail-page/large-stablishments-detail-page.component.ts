import { Component, OnInit } from '@angular/core'
import { BigMallsModel } from 'src/app/models/big-malls.model'
import { LargeStablishmentsService } from 'src/app/services/large-stablishments.service'

@Component({
  selector: 'app-large-stablishments-detail-page',
  templateUrl: './large-stablishments-detail-page.component.html',
  styleUrls: ['./large-stablishments-detail-page.component.css'],
})
export class LargeStablishmentsDetailPageComponent implements OnInit {
  BigMallData: BigMallsModel[] = []

  constructor(private lSservice: LargeStablishmentsService) {}

  ngOnInit(): void {
    this.lSservice.getBigMalls().subscribe((data) => {
      this.BigMallData = data.results
    })
  }
}
