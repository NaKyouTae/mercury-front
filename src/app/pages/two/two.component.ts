import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent implements OnInit {
  public datas: Array<any> = new Array();
  public words: Array<any> = new Array();
  public description: any;
  constructor(private common: CommonHttpService) {}

  ngOnInit() {
    this.common.httpCallGet('service/words/group', { group: 'TWO' }).subscribe((res: any) => {
      this.words.push(res.result.word.substring(0, 1));
      this.words.push(res.result.word.substring(1, 2));
      this.description = res.result.description;
    });

    this.common.httpCallGet('service/twice').subscribe((res: any) => {
      this.datas = res.result;
    });
  }
}
