import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  @Input() formData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
