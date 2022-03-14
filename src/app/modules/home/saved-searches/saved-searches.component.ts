import { Component, OnInit } from '@angular/core';
import { SaveSearchesService } from '../../../services/saved-searches.service';

@Component({
  selector: 'app-saved-searches',
  templateUrl: './saved-searches.component.html',
  styleUrls: ['./saved-searches.component.css']
})
export class SavedSearchesComponent implements OnInit {

  constructor(private savedSearchesService: SaveSearchesService) { }

  ngOnInit(): void {
  }

}
