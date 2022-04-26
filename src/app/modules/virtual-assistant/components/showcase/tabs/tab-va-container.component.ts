import { Component } from '@angular/core';
import { Code } from './microcomponents/code-interface';
import { StyleCode } from './microcomponents/code-style';
import { Indent } from './microcomponents/code-enum';

@Component({
  selector: 'tab-va-container',
  templateUrl: './tab-va-container.component.html',
  styleUrls: ['./microcomponents/code-style.css']
})
export class TabVaContainerComponent {

  colTotal: string = "3";

  colSpan: string = "2";

  rowHeightProp: string = "700px";

  showWord: string = "Hello!";

  mainSelectorComponent: string = "virtual-assistant-container";

  case1: Code = {
    title: 'Case 1',
    subtitle: `Basic <b>${this.mainSelectorComponent}</b> without attributes`,
    show: [
      StyleCode.comment(this.mainSelectorComponent),
      StyleCode.open(Indent.NOINDENT, this.mainSelectorComponent),
      StyleCode.sandwich(Indent.INDENT1, 'p', this.showWord),
      StyleCode.close(Indent.NOINDENT, this.mainSelectorComponent),
      StyleCode.comment(this.mainSelectorComponent, true)
    ],
    copy: [
      `${StyleCode.copyComment(this.mainSelectorComponent)}`,
      `\n<${this.mainSelectorComponent}>`,
      `\n\t<p>${this.showWord}</p>`,
      `\n</${this.mainSelectorComponent}>`,
      `\n${StyleCode.copyComment(this.mainSelectorComponent, true)}`
    ]
  }

  case2: Code = {
    title: 'Case 2',
    subtitle: `Basic container theme using <b>vaStyle='theme'</b>`,
    show: [
      StyleCode.comment(this.mainSelectorComponent),
      StyleCode.open(Indent.NOINDENT, this.mainSelectorComponent, Indent.NOINDENT, ["vaStyle", "'theme'"]),
      StyleCode.sandwich(Indent.INDENT1, 'p', this.showWord),
      StyleCode.close(Indent.NOINDENT, this.mainSelectorComponent),
      StyleCode.comment(this.mainSelectorComponent, true)
    ],
    copy: [
      `${StyleCode.copyComment(this.mainSelectorComponent)}`,
      `\n<${this.mainSelectorComponent} vaStyle='theme'>`,
      `\n\t<p>${this.showWord}</p>`,
      `\n</${this.mainSelectorComponent}>`,
      `\n${StyleCode.copyComment(this.mainSelectorComponent, true)}`
    ]
  }

  case3: Code = {
    title: 'Case 3',
    subtitle: `Basic <b>virtual-assistant-container</b> with <b>containerBackgroundColor='ff0000'</b>`,
    show: [
      StyleCode.comment(this.mainSelectorComponent),
      StyleCode.open(Indent.NOINDENT, this.mainSelectorComponent, Indent.NOINDENT, ["containerBackgroundColor", "'ff0000'"]),
      StyleCode.sandwich(Indent.INDENT1, 'p', this.showWord),
      StyleCode.close(Indent.NOINDENT, this.mainSelectorComponent),
      StyleCode.comment(this.mainSelectorComponent, true)
    ],
    copy: [
      `${StyleCode.copyComment(this.mainSelectorComponent)}`,
      `\n<${this.mainSelectorComponent} containerBackgroundColor='ff0000'>`,
      `\n\t<p>${this.showWord}</p>`,
      `\n</${this.mainSelectorComponent}>`,
      `\n${StyleCode.copyComment(this.mainSelectorComponent, true)}`
    ]
  }

  case4: Code = {
    title: 'Case 4',
    subtitle: `Basic <b>virtual-assistant-container</b> with <b>attributes</b>`,
    show: [
      StyleCode.comment(this.mainSelectorComponent),
      StyleCode.open(Indent.NOINDENT, this.mainSelectorComponent, Indent.INDENT1, 
        ["containerWidth", "'150px'"],
        ["containerHeight", "'150px'"],
        ["containerBackgroundColor", "'red'"]
        ),
      StyleCode.sandwich(Indent.INDENT1, 'p', this.showWord),
      StyleCode.close(Indent.NOINDENT, this.mainSelectorComponent),
      StyleCode.comment(this.mainSelectorComponent, true)
    ],
    copy: [
      `${StyleCode.copyComment(this.mainSelectorComponent)}`,
      `\n<${this.mainSelectorComponent}`,
      `\n\tcontainerWidth='150px'`,
      `\n\tcontainerHeight='150px'`,
      `\n\tcontainerBackgroundColor='red'`,
      `\n>`,
      `\n\t<p>${this.showWord}</p>`,
      `\n</${this.mainSelectorComponent}>`,
      `\n${StyleCode.copyComment(this.mainSelectorComponent, true)}`
    ]
  }

  case5: Code = {
    title: 'Case 5',
    subtitle: `Background color, inner padding & elevation`,
    show: [
      StyleCode.comment(this.mainSelectorComponent),
      StyleCode.open(Indent.NOINDENT, this.mainSelectorComponent, Indent.INDENT1, 
        ["containerWidth", "'200px'"],
        ["containerHeight", "'100px'"],
        ["containerInnerPadding", "'15px'"],
        ["containerBackgroundColor", "'white'"],
        ["[containerElevationInactive]", "2"]
        ),
      StyleCode.sandwich(Indent.INDENT1, 'p', this.showWord),
      StyleCode.close(Indent.NOINDENT, this.mainSelectorComponent),
      StyleCode.comment(this.mainSelectorComponent, true)
    ],
    copy: [
      `${StyleCode.copyComment(this.mainSelectorComponent)}`,
      `\n<${this.mainSelectorComponent}`,
      `\n\tcontainerWidth='200px'`,
      `\n\tcontainerHeight='100px'`,
      `\n\tcontainerInnerPadding='15px'`,
      `\n\tcontainerBackgroundColor='white'`,
      `\n\t[containerElevationInactive]=2`,
      `\n>`,
      `\n\t<p>${this.showWord}</p>`,
      `\n</${this.mainSelectorComponent}>`,
      `\n${StyleCode.copyComment(this.mainSelectorComponent, true)}`
    ]
  }

  case6a: Code = {
    title: 'Case 6',
    subtitle: `Basic theme container using <b>vaStyle='theme'</b> and custom background color`,
    show: [
      StyleCode.comment(this.mainSelectorComponent),
      StyleCode.open(Indent.NOINDENT, this.mainSelectorComponent, Indent.INDENT1, 
        ["containerWidth", "'200px'"],
        ["containerHeight", "'100px'"],
        ["vaStyle", "'theme'"],
        ["containerBackgroundColor", "'ffffaa'"]
        ),
      StyleCode.sandwich(Indent.INDENT1, 'p', this.showWord),
      StyleCode.close(Indent.NOINDENT, this.mainSelectorComponent),
      StyleCode.comment(this.mainSelectorComponent, true)
    ],
    copy: [
      `${StyleCode.copyComment(this.mainSelectorComponent)}`,
      `\n<${this.mainSelectorComponent}`,
      `\n\tcontainerWidth='200px'`,
      `\n\tcontainerHeight='100px'`,
      `\n\tvaStyle='theme'`,
      `\n\tcontainerBackgroundColor='ffffaa'`,
      `\n>`,
      `\n\t<p>${this.showWord}</p>`,
      `\n</${this.mainSelectorComponent}>`,
      `\n${StyleCode.copyComment(this.mainSelectorComponent, true)}`
    ]
  }

  case6b: Code = {
    title: 'Case 6',
    subtitle: `Basic theme container using <b>vaStyle='theme'</b> and custom background color`,
    show: [
      StyleCode.comment(this.mainSelectorComponent),
      StyleCode.open(Indent.NOINDENT, this.mainSelectorComponent, Indent.INDENT1, 
        ["containerWidth", "'200px'"],
        ["containerHeight", "'100px'"],
        ["vaStyle", "'theme'"],
        ["containerBackgroundColor", "'transparent'"]
        ),
      StyleCode.sandwich(Indent.INDENT1, 'p', this.showWord),
      StyleCode.close(Indent.NOINDENT, this.mainSelectorComponent),
      StyleCode.comment(this.mainSelectorComponent, true)
    ],
    copy: [
      `${StyleCode.copyComment(this.mainSelectorComponent)}`,
      `\n<${this.mainSelectorComponent}`,
      `\n\tcontainerWidth='200px'`,
      `\n\tcontainerHeight='100px'`,
      `\n\tvaStyle='theme'`,
      `\n\tcontainerBackgroundColor='transparent'`,
      `\n>`,
      `\n\t<p>${this.showWord}</p>`,
      `\n</${this.mainSelectorComponent}>`,
      `\n${StyleCode.copyComment(this.mainSelectorComponent, true)}`
    ]
  }

  constructor() { }

}
