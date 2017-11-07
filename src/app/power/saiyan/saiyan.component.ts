import { Component, OnInit, Input, Output} from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SaiyanComponent implements OnInit {
  @Input() myLevel;
  constructor() { }

  ngOnInit() {
  }

}
