import { Component } from '@angular/core';
import { Indent } from './microcomponents/code-enum';
import { Code } from './microcomponents/code-interface';
import { StyleCode } from './microcomponents/code-style';

@Component({
  selector: 'tab-va-accordion',
  templateUrl: './tab-va-accordion.component.html',
  styleUrls: ['./microcomponents/code-style.css']
})
export class TabVaAccordionComponent {

  colTotal: string = "3";

  colSpan: string = "2";

  rowHeightProp: string = "700px";

  showWord: string = "Hello!";

  mainSelectorComponent: string = "virtual-assistant-accordion";

  case1: Code = {
    title: 'Case 1',
    subtitle: `Basic <b>${this.mainSelectorComponent}</b> with INPUT and OUTPUT`,
    show: [
      StyleCode.comment(this.mainSelectorComponent),
      StyleCode.open(Indent.NOINDENT, this.mainSelectorComponent, Indent.INDENT1,
        ["[accordionDataInput]", '"myDataSource"'],
        ["(accordionDataOutput)", '"myGetDataFromAccordion($event)"']
      ),
      StyleCode.close(Indent.NOINDENT, this.mainSelectorComponent),
      StyleCode.comment(this.mainSelectorComponent, true)

    ],
    copy: [
      `${StyleCode.copyComment(this.mainSelectorComponent)}`,
      `\n<${this.mainSelectorComponent}`,
      `\n\t[accordionDataInput]="myDataSource"`,
      `\n\t(accordionDataOutput)="myGetDataFromAccordion($event)">`,
      `\n</${this.mainSelectorComponent}>`,
      `\n${StyleCode.copyComment(this.mainSelectorComponent, true)}`
    ]
  }

  dataShared: any[] = []

  dataSource: any[] = [
    {
      title: 'LOREM I',
      subcategory: [
        {
          title: 'Lorem 1',
          items: [
            { item: 'lorem a' },
            { item: 'lorem b' },
            { item: 'lorem c' }
          ]
        },
        {
          title: 'Lorem 2',
          items: [
            { item: 'lorem a' },
            { item: 'lorem b' },
            { item: 'lorem c' }
          ]
        }
      ]
    },
    {
      title: 'LOREM II',
      subcategory: [
        {
          title: 'Lorem 1',
          items: [
            { item: 'lorem a' },
            { item: 'lorem b' },
            { item: 'lorem c' }
          ]
        },
        {
          title: 'Lorem 2',
          items: [
            { item: 'lorem a' },
            { item: 'lorem b' },
            { item: 'lorem c' }
          ]
        }
      ]
    },
    {
      title: 'LOREM III',
      subcategory: [
        {
          title: 'Lorem 1',
          items: [
            { item: 'lorem a' },
            { item: 'lorem b' },
            { item: 'lorem c' }
          ]
        },
        {
          title: 'Lorem 2',
          items: [
            { item: 'lorem a' },
            { item: 'lorem b' },
            { item: 'lorem c' }
          ]
        }
      ]
    }

  ]

  getDataFromAccordion(accordionData: any[]) {  
    this.dataShared = [...accordionData];
  }

  constructor() { }

}
