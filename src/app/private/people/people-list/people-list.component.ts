import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  filter = '';

  peopleList:any=[];
  p:number=1;

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
  }

  onModelChange(filter) {
    this.generalService.searchPeople(filter).subscribe(data => {
      this.peopleList=data;
    }, error => {
    });
  }

}
