import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {


  }

  constructor() { }

  ngOnInit() {
  }

}
