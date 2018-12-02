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
  message: any = '';
  public episodesList: any = [];
  currentId: any = 0;
  castList: any=[];
  constructor(private route: ActivatedRoute, private generalService: GeneralService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.currentId = params['id'];
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

  getEpisdoes() {
    console.log('get episodes called')


    this.generalService.getShowsAllEpisodes(this.currentId).subscribe(data => {
      this.episodesList = data;
      console.log(this.episodesList)

    }, error => {

    });

  }

  getShowCast() {
    console.log('get cast called')

    this.generalService.getShowCast(this.currentId).subscribe(data => {
      this.castList = data;
      console.log(this.castList)

    }, error => {

    });

  }

  cleanParaghraf(str: string) {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  }

}
