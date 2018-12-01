import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {

  public show: any = {};
  message: any='';
  constructor(private route: ActivatedRoute, private generalService: GeneralService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.getShowById(params['id']);
    })
  }

  getShowById(showId) {
    this.generalService.getShowById(showId).subscribe(data => {
      console.log(data);
      this.show = data;

    }, error => {
      console.log('error', error.message)
      this.message = error.message
    });

  }

  cleanParaghraf(str: string) {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  }

}
