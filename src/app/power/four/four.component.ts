import { Component, OnInit, Input, Output} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FourComponent implements OnInit {
  @Input() myLevel;
  constructor() { }

  ngOnInit() {
  }

}
