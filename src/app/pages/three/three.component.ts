import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
})
export class ThreeComponent implements OnInit {
  public datas: Array<any> = new Array();
  public top: Array<any> = new Array();
  public words: Array<any> = new Array();
  public description: any;
  constructor(private common: CommonHttpService) { }

  ngOnInit() {
    this.common.httpCallGet('service/words/group', { group: 'THREE' }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.words.push(res.result.word.substring(0, 1));
        this.words.push(res.result.word.substring(1, 2));
        this.words.push(res.result.word.substring(2, 3));
        this.description = res.result.description;
      } else {
        this.words = new Array();
        this.description = 'Result Null';
      }
    });

    // this.common.httpCallGet('service/three/words', {userIdx: this.}).subscribe((res: any) => {
    //   if (res.resultCode === 'OK' && res.result !== null) {
    //     this.datas = res.result;
    //   } else {
    //     this.datas = new Array();
    //   }
    // });

    // this.common.httpCallGet('service/three/popular').subscribe((res: any) => {
    //   if (res.resultCode === 'OK' && res.result !== null) {
    //     this.top = res.result.slice(0, 3);
    //   } else {
    //     this.top = new Array();
    //   }
    // });
  }
}
