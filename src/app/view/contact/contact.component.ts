import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  showThankYouMessage = false;

  @Input() formData: any;
  contactForm: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.showThankYouMessage = true;

  }


}
