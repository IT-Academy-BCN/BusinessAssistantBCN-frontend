import { Component, Input, OnInit } from '@angular/core';
import { BusinessAssistantDataService } from 'src/app/services/business-assistant-data.service';

@Component({
  selector: 'app-business-assistant',
  templateUrl: './business-assistant.component.html',
  styleUrls: ['./business-assistant.component.css']
})
export class BusinessAssistantComponent implements OnInit {

  @Input() data:any;

  list:string = '';
  item: string = '';
  open: boolean = false;

  titles: string[] = [
    'pages.business-assistant.section1.title',
    'pages.business-assistant.section2.title',
    'pages.business-assistant.section3.title',
    'pages.business-assistant.section4.title',
    'pages.business-assistant.section5.title',
    'pages.business-assistant.section6.title',
   
  ]

  /// SECCION 1 (s1) -> Analisis del sector

  //Subcategories:
  subcat1: string[] = [
    'pages.business-assistant.section1.subcat1',
    'pages.business-assistant.section1.subcat2',
    'pages.business-assistant.section1.subcat3',
    'pages.business-assistant.section1.subcat4',
    'pages.business-assistant.section1.subcat5',
    'pages.business-assistant.section1.subcat6',
  ]
  // Items
  s1s1item: string[] = [
    'pages.business-assistant.section1.s1-item1',
    'pages.business-assistant.section1.s1-item2',
    'pages.business-assistant.section1.s1-item3',
  ]
  s1s2item: string[] = [
    'pages.business-assistant.section1.s2-item1',
    'pages.business-assistant.section1.s2-item2',
    'pages.business-assistant.section1.s2-item3',
    'pages.business-assistant.section1.s2-item4',
    'pages.business-assistant.section1.s2-item5',
    'pages.business-assistant.section1.s2-item6',
  ]
  s1s3item: string[] = [
    'pages.business-assistant.section1.s3-item1',
  ]
  s1s4item: string[] = [
    'pages.business-assistant.section1.s4-item1',
    'pages.business-assistant.section1.s4-item2',
    'pages.business-assistant.section1.s4-item3',
  ]
  s1s5item: string[] = [
    'pages.business-assistant.section1.s5-item1',
    'pages.business-assistant.section1.s5-item2',
    'pages.business-assistant.section1.s5-item3',
    'pages.business-assistant.section1.s5-item4',
  ]
  s1s6item: string[] = [
    'pages.business-assistant.section1.s6-item1',
    'pages.business-assistant.section1.s6-item2',
    'pages.business-assistant.section1.s6-item3',
    'pages.business-assistant.section1.s6-item4',
    'pages.business-assistant.section1.s6-item5',
    'pages.business-assistant.section1.s6-item6',
  ]

  /// SECCION 2 (s2) -> Analisis de habitos de consumo
   
  //Subcategories:
  subcat2: string[] = [
    'pages.business-assistant.section2.subcat1',
    'pages.business-assistant.section2.subcat2',
    'pages.business-assistant.section2.subcat3',
  ]
  // Items
  s2s1item: string[] = [
    'pages.business-assistant.section2.s1-item1',
    'pages.business-assistant.section2.s1-item2',
    'pages.business-assistant.section2.s1-item3',
    'pages.business-assistant.section2.s1-item4',
    'pages.business-assistant.section2.s1-item5',
    'pages.business-assistant.section2.s1-item6',
  ]
  s2s2item: string[] = [
    'pages.business-assistant.section2.s2-item1',
    'pages.business-assistant.section2.s2-item2',
    'pages.business-assistant.section2.s2-item3',
    'pages.business-assistant.section2.s2-item4',
  ]
  s2s3item: string[] = [
    'pages.business-assistant.section2.s3-item1',
  ]

  /// SECCION 4 (s4) -> Analisis de la competencia

  //Subcategories:
  subcat4: string[] = [
    'pages.business-assistant.section4.subcat1',
    'pages.business-assistant.section4.subcat2',
    'pages.business-assistant.section4.subcat3',
    'pages.business-assistant.section4.subcat4',
  ]
  // Items
  s4s2item: string[] = [
    'pages.business-assistant.section4.s2-item1',
    'pages.business-assistant.section4.s2-item2',
    'pages.business-assistant.section4.s2-item3',
  ]
  s4s3item: string[] = [
    'pages.business-assistant.section4.s3-item1',
  ]
  s4s4item: string[] = [
    'pages.business-assistant.section4.s4-item1',
    'pages.business-assistant.section4.s4-item2',
  ]
  


  constructor(private businessAssistantData : BusinessAssistantDataService) { }
  
  ngOnInit(): void {
  }

  subcat(title:string){
    if(title != this.list){
      this.open = true
    }else{
      this.open = !this.open
    }
    this.list = title
  }

  isActive(item: string): string{
    return this.list == item ? 'active': ''
  }

  items(title: string){
    this.item = title
  }


  // saveData(){
  //   this.businessAssistantData.dataSaver.emit()
  // }

}
