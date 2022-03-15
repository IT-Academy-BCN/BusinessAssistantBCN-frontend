import { Component, OnInit } from '@angular/core';
import { SavedSearchesModel } from 'src/app/models/saved-searches.model';
import { SaveSearchesService } from '../../../services/saved-searches.service';


@Component({
  selector: 'app-saved-searches',
  templateUrl: './saved-searches.component.html',
  styleUrls: ['./saved-searches.component.css']
})
export class SavedSearchesComponent implements OnInit {

  constructor(private savedSearchesService: SaveSearchesService) { }

  savedSearchesData: SavedSearchesModel[] = []
  ngOnInit(): void {
    this.savedSearchesService.getSavedSearches().subscribe((resp: any) => {

      this.savedSearchesData = resp.results;
console.log(this.savedSearchesData)
    })
  }

}
