import { Component, OnInit } from '@angular/core'
import { LargeStablishmentsService } from 'src/app/services/large-stablishments.service'
import { LargeStablishmentModel } from '../../../models/large-stablishment.model';

@Component({
  selector: 'app-large-stablishments-detail-page',
  templateUrl: './large-stablishments-detail-page.component.html',
  styleUrls: ['./large-stablishments-detail-page.component.css'],
})
export class LargeStablishmentsDetailPageComponent implements OnInit {
  LSData: LargeStablishmentModel[] = []

  constructor(private lSservice: LargeStablishmentsService) {}

  ngOnInit(): void {
    this.lSservice.getBigMalls().subscribe((data) => {
      this.LSData = data.results
    })
  }
}
