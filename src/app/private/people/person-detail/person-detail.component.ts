import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  public person: any = {};
  message: any='';
  constructor(private route: ActivatedRoute, private generalService: GeneralService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.getPersonById(params['id']);
    })
  }

  getPersonById(personId) {
    this.generalService.getPersonById(personId).subscribe(data => {
      this.person = data;

    }, error => {
      this.message = error.message
    });

  }

}
