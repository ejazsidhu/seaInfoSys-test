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
  public p:number=0
  public message: any = '';
  public episodesList: any = [];
  public currentId: any = 0;
  public castList: any = [];
  constructor(private route: ActivatedRoute, private generalService: GeneralService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.currentId = params['id'];
      this.getShowById(params['id']);
      this.getEpisdoes(this.currentId);
      this.getShowCast(this.currentId);
    })
  }

  getShowById(showId) {
    this.generalService.getShowById(showId).subscribe(data => {
      this.show = data;
    }, error => {
      this.message = error.message
    });

  }

  getEpisdoes(showId) {
      this.generalService.getShowsAllEpisodes(showId).subscribe(data => {
      this.episodesList = data;
   
    }, error => {

    });

  }

  getShowCast(showId) {
 

    this.generalService.getShowCast(showId).subscribe(data => {
      this.castList = data;
    
    }, error => {

    });

  }

  cleanParaghraph(str: string) {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  }

}
