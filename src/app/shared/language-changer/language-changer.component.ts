import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-changer',
  templateUrl: './language-changer.component.html',
  styleUrls: ['./language-changer.component.css']
})
export class LanguageChangerComponent implements OnInit {

  constructor(private translate:TranslateService) { }

  ngOnInit(): void {
  }
  changeLanguage(language: string): void {
    this.translate.use(language);
  }
}
