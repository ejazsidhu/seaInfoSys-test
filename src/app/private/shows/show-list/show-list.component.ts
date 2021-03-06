import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  showsList: any = [];
  loading = false;
  p: number = 1;
  filter = '';
  message = '';

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.loading = true
    this.getData();
  }


  getData() {
    this.generalService.getAllShows().subscribe(data => {
      this.showsList = data;
      this.loading = false;

    }, error => {
      this.message = error.message;
    })
  }

}
