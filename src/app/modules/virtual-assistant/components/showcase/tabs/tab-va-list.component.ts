import { Component } from '@angular/core';
import { Indent } from './microcomponents/code-enum';
import { Code } from './microcomponents/code-interface';
import { StyleCode } from './microcomponents/code-style';

@Component({
  selector: 'tab-va-list',
  templateUrl: './tab-va-list.component.html',
  styleUrls: ['./microcomponents/code-style.css']
})
export class TabVaListComponent {

  colTotal: string = "3";

  colSpan: string = "2";

  rowHeightProp: string = "700px";

  showWord: string = "Hello!";

  mainSelectorComponent: string = "virtual-assistant-list";

  case1: Code = {
    title: 'Case 1',
    subtitle: `Basic <b>${this.mainSelectorComponent}</b> with INPUT string[]`,
    show: [
      StyleCode.comment(this.mainSelectorComponent),
      StyleCode.open(Indent.NOINDENT, this.mainSelectorComponent, Indent.NOINDENT, ["[listDataInput]", "'myListData'"]),
      StyleCode.close(Indent.NOINDENT, this.mainSelectorComponent),
      StyleCode.comment(this.mainSelectorComponent, true)

    ],
    copy: [
      `${StyleCode.copyComment(this.mainSelectorComponent)}`,
      `\n<${this.mainSelectorComponent} [listDataInput]="['a', 'b', 'c']">`,
      `\n</${this.mainSelectorComponent}>`,
      `\n${StyleCode.copyComment(this.mainSelectorComponent, true)}`
    ]
  }

  listData: string[] = [
    "Lorem 1",
    "Lorem 2",
    "Lorem 3",
    "Lorem 4",
    "Lorem 5"
  ];

}
