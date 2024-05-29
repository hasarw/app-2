import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() formData: any;

  @Output() formDataChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
