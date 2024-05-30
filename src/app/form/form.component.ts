import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private dataService: DataService,
    private router: Router) {

      this.form = this.fb.group({
        name: ['Hekmat Sarwarzadah'],
        email: ['hasarw@gmail.com'],
        headline: ['Full Stack Web Developer'],
        linkedin: ['https://www.linkedin.com/in/hekmat-sarwarzadah/'],
        about: ['Dynamic and results-driven Web Developer and SEO Specialist with a solid foundation in data analysis and a proven track record of optimizing website performance and driving user engagement. Adept at leveraging a diverse skill set to develop and enhance web platforms while implementing strategic SEO initiatives. Experienced in collaborating with cross-functional teams to deliver innovative solutions that meet client objectives. Proficient in Angular, PHP, MySQL, JavaScript, HTML, CSS, JQuery, .NET and various SEO tools. Committed to staying updated on the latest industry trends and technologies to deliver cutting-edge results.'],
        phone: [4373833893],
        address: ['Toronto, Ontario'],
        lang: ['English, Persian'],
        skills: ['SQL,.NET, php, Angular, HTML, CSS, JavaScript, Python'],
        jobtitle1: ['Web Developer'],
        jobtitle2: ['Web Developer and SEO Specialist'],
        org1: ['PomTech ICT Solution'],
        org2: ['Places in PEC'],
        orgDate1: ['2017-12-10'],
        orgDate2: ['2024-05-01'],
        orgDetails1: ['Develop, design, and modify websites, from layout to function and according to clients\' specifications Strive to create visually appealing sites that feature user-friendly design and clear navigation and consider security. Analyze client\'s websites to meet the latest search engine optimization (SEO) strategies.'],
        orgDetails2: ['Conducted website analysis, enhancing user engagement and conversion rates. Contributed to content development for website and social media, ensuring consistency and relevance. Utilized SEO tools to optimize website performance and inform strategic decisions.'],
        school1: ['Humber College'],
        degree1: ['Full Stack .NET Cloud Developer Certificate'],
        gradDate1: ['2024-07-01'],
        school2: ['Asian Institute of Technology'],
        degree2: ['Master'],
        gradDate2: ['2023-05-01']
      });

   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value);
    this.dataService.updateFormData(this.form.value);
    this.router.navigate(['/view']);
  }
}
