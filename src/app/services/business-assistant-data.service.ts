import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessAssistantDataService {
  @Output() dataSaver: EventEmitter<any> = new EventEmitter()
  constructor() { }
}
