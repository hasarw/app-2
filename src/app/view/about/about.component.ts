import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() formData: any;
  @Input() skills: string[] | undefined;
  @Input() getRandomNumber!: () => number;
  @Input() randomNumber: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
