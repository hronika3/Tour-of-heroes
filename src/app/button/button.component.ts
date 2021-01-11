import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {

  backgroundToggle = true;

  constructor() { }

  ngOnInit(): void {
  }


}
