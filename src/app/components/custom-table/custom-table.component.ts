import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  @Input() data: any[] = []
  @Input() columns: any[] = []
  @Input() buttontext: string = ''
  @Output() buttonFunction: EventEmitter<any> = new EventEmitter<any>()


  constructor() { }

  ngOnInit(): void {
    console.log(this.columns)
  }

  buttonEvent(item: any) {
    this.buttonFunction.emit(item)
  }


}
