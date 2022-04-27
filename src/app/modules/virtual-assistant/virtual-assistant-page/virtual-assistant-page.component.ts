// ANGULAR CORE
import { Component, OnInit } from '@angular/core';

// MODELS - APP > MODELS > business-assistant.model
// import { Category } from 'src/app/models/business-assistant.model';

// VIRTUAL-ASSISTANT MODELS - BUSINESS ASISSTANT CATEGORY
import { Category } from '../models/business-assistant.model';
import { VirtualAssisstantCategoriesService } from '../services/virtual-assisstant-categories.service';


@Component({
  selector: 'app-virtual-assistant-page',
  templateUrl: './virtual-assistant-page.component.html'
})
export class VirtualAssistantPageComponent implements OnInit {

  // Data Source to share with Mat-Accordion from VirtualAssistantAccordionComponent.
  dataSourceCategory: Category[] = [];

  //** Construtor with VACategoriesService to get all categories to show. */
  constructor( private serviceCategories: VirtualAssisstantCategoriesService) { 
    this.dataSourceCategory = [];
    this.serviceCategories.getCategories();
  }

  /** Obtain data into 'dataSourceCategory' from VACategoriesService. */
  ngOnInit(): void {
    this.dataSourceCategory = this.serviceCategories.categories;
  }

}
