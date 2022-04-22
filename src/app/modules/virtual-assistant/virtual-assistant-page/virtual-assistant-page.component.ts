// ANGULAR CORE
import { Component } from '@angular/core';

// MODELS - APP > MODELS > business-assistant.model
import { Category } from 'src/app/models/business-assistant.model';


@Component({
  selector: 'app-virtual-assistant-page',
  templateUrl: './virtual-assistant-page.component.html',
  styleUrls: ['./virtual-assistant-page.component.css']
})
export class VirtualAssistantPageComponent {

  // Data Shared with VirtualAssistantDataSaveComponent.
  dataShared: any[] = [] // TODO improve typing any[]

  // Data Source to share with Mat-Accordion from VirtualAssistantAccordionComponent.
  dataSourceCategory: Category[] = [
    {
      title: 'pages.business-assistant.section1.title',
      subcategory: [
        {
          title: 'pages.business-assistant.section1.subcat1',
          items: [
            { item: 'pages.business-assistant.section1.s1-item1' },
            { item: 'pages.business-assistant.section1.s1-item2' },
            { item: 'pages.business-assistant.section1.s1-item3' }
          ]
        },
        {
          title: 'pages.business-assistant.section1.subcat2',
          items: [
            { item: 'pages.business-assistant.section1.s2-item1' },
            { item: 'pages.business-assistant.section1.s2-item2' },
            { item: 'pages.business-assistant.section1.s2-item3' },
            { item: 'pages.business-assistant.section1.s2-item4' },
            { item: 'pages.business-assistant.section1.s2-item5' },
            { item: 'pages.business-assistant.section1.s2-item6' }
          ]
        },
        {
          title: 'pages.business-assistant.section1.subcat3',
          items: [
            { item: 'pages.business-assistant.section1.s3-item1' }
          ]
        },
        {
          title: 'pages.business-assistant.section1.subcat4',
          items: [
            { item: 'pages.business-assistant.section1.s4-item1' },
            { item: 'pages.business-assistant.section1.s4-item2' },
            { item: 'pages.business-assistant.section1.s4-item3' }
          ]
        },
        {
          title: 'pages.business-assistant.section1.subcat5',
          items: [
            { item: 'pages.business-assistant.section1.s5-item1' },
            { item: 'pages.business-assistant.section1.s5-item2' },
            { item: 'pages.business-assistant.section1.s5-item3' },
            { item: 'pages.business-assistant.section1.s5-item4' }
          ]
        },
        {
          title: 'pages.business-assistant.section1.subcat6',
          items: [
            { item: 'pages.business-assistant.section1.s6-item1' },
            { item: 'pages.business-assistant.section1.s6-item2' },
            { item: 'pages.business-assistant.section1.s6-item3' },
            { item: 'pages.business-assistant.section1.s6-item4' },
            { item: 'pages.business-assistant.section1.s6-item5' },
            { item: 'pages.business-assistant.section1.s6-item6' }
          ]
        },
      ]
    },

    {
      title: 'pages.business-assistant.section2.title',
      subcategory: [
        {
          title: 'pages.business-assistant.section2.subcat1',
          items: [
            { item: 'pages.business-assistant.section2.s1-item1' },
            { item: 'pages.business-assistant.section2.s1-item2' },
            { item: 'pages.business-assistant.section2.s1-item3' },
            { item: 'pages.business-assistant.section2.s1-item4' },
            { item: 'pages.business-assistant.section2.s1-item5' },
            { item: 'pages.business-assistant.section2.s1-item6' },
          ]
        },
        {
          title: 'pages.business-assistant.section2.subcat2',
          items: [
            { item: 'pages.business-assistant.section2.s2-item1' },
            { item: 'pages.business-assistant.section2.s2-item2' },
            { item: 'pages.business-assistant.section2.s2-item3' },
            { item: 'pages.business-assistant.section2.s2-item4' },
          ]
        },
        {
          title: 'pages.business-assistant.section2.subcat3',
          items: [
            { item: 'pages.business-assistant.section2.s3-item1' }
          ]
        },
      ]
    },

    {
      title: 'pages.business-assistant.section3.title',
      subcategory: [
        {
          title: '',
          items: [
            { item: '' }
          ]
        }
      ]
    },

    {
      title: 'pages.business-assistant.section4.title',
      subcategory: [
        {
          title: 'pages.business-assistant.section4.subcat1',
          items: [
            { item: '' }
          ]
        },
        {
          title: 'pages.business-assistant.section4.subcat2',
          items: [
            { item: 'pages.business-assistant.section4.s2-item1' },
            { item: 'pages.business-assistant.section4.s2-item2' },
            { item: 'pages.business-assistant.section4.s2-item3' },
          ]
        },
        {
          title: 'pages.business-assistant.section4.subcat3',
          items: [
            { item: 'pages.business-assistant.section4.s3-item1' }
          ]
        },
        {
          title: 'pages.business-assistant.section4.subcat4',
          items: [
            { item: 'pages.business-assistant.section4.s4-item1' },
            { item: 'pages.business-assistant.section4.s4-item2' },
          ]
        },
      ]
    },
    {
      title: 'pages.business-assistant.section5.title',
      subcategory: [
        {
          title: '',
          items: [
            { item: '' }
          ]
        }
      ]
    },
    {
      title: 'pages.business-assistant.section6.title',
      subcategory: [
        {
          title: '',
          items: [
            { item: '' }
          ]
        }
      ]
    },
  ];

  // Not delete this empty constructor to make implementations easier to understand.
  constructor() { }

  /**
   * Get the output data from accordion-component.
   * @param accordionData The obtained data is shared by the component in the input of VirtualAssistantList.
   */
  getDataFromAccordion(accordionData: any[]) {  // TODO improve typing any[]
    this.dataShared = [...accordionData];
  }
}
