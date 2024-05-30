import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  formData: any;

  skills: string[] = [];
  skill: string = '';
  randomNumber: number = 0;

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.currentFormData.subscribe(data => {
      this.formData = data;
      this.getSkills();
    });
  }

  getSkills() {
    if (this.formData && this.formData.skills) {
      this.skills = this.formData.skills.split(',').map((skill: string) => skill.trim());

    }
  }

  getRandomNumber(): number {
    return this.randomNumber = Math.floor(Math.random() * (90 - 80 + 1)) + 90;
  }
}
