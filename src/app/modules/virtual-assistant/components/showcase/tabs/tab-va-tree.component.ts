import { Component } from '@angular/core';
import { Indent } from './microcomponents/code-enum';
import { Code } from './microcomponents/code-interface';
import { StyleCode } from './microcomponents/code-style';

@Component({
  selector: 'tab-va-tree',
  templateUrl: './tab-va-tree.component.html',
  styleUrls: ['./microcomponents/code-style.css']
})
export class TabVaTreeComponent {

  colTotal: string = "2";

  colSpan: string = "2";

  rowHeightProp: string = "700px";

  showWord: string = "Hello!";

  mainSelectorComponent: string = "virtual-assistant-tree";

  case1: Code = {
    title: 'Case 1',
    subtitle: `Basic <b>${this.mainSelectorComponent}</b> with INPUT`,
    show: [
      StyleCode.comment(this.mainSelectorComponent),
      StyleCode.open(Indent.NOINDENT, this.mainSelectorComponent, Indent.NOINDENT, ["[treeDataInput]", "'myData'"]),
      StyleCode.close(Indent.NOINDENT, this.mainSelectorComponent),
      StyleCode.comment(this.mainSelectorComponent, true)

    ],
    copy: [
      `${StyleCode.copyComment(this.mainSelectorComponent)}`,
      `\n<${this.mainSelectorComponent} [treeDataInput]='myData'>`,
      `\n</${this.mainSelectorComponent}>`,
      `\n${StyleCode.copyComment(this.mainSelectorComponent, true)}`
    ]
  }

  TREE_DATA = {
    Groceries: {
      'Almond Meal flour': null,
      'Organic eggs': null,
      'Protein Powder': null,
      Fruits: {
        Apple: null,
        Berries: ['Blueberry', 'Raspberry'],
        Orange: null,
      },
    },
    Reminders: ['Cook dinner', 'Read the Material Design spec', 'Upgrade Application to Angular'],
  };

  constructor() { }

}
