import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
})
export class ThreeComponent implements OnInit {
  public datas: Array<any> = new Array();
  public words: Array<any> = new Array();
  public description: any;
  constructor(private common: CommonHttpService) { }

  ngOnInit() {
    this.common.httpCallGet('service/words/group', { group: 'THREE' }).subscribe((res: any) => {
      this.words.push(res.result.word.substring(0, 1));
      this.words.push(res.result.word.substring(1, 2));
      this.words.push(res.result.word.substring(2, 3));
      this.description = res.result.description;
    });

    this.common.httpCallGet('service/three/words').subscribe((res: any) => {
      this.datas = res.result;
    });
  }
}
