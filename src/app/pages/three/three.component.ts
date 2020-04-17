import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  public datas: Array<any> = new Array();
  public words: Array<any> = new Array();

  constructor(private common: CommonHttpService) { }

  ngOnInit() {

    this.common.httpCallGet('service/weekword/words').subscribe((res: any) => {
      this.words.push(res.result.word.substring(0, 1));
      this.words.push(res.result.word.substring(1, 2));
      this.words.push(res.result.word.substring(2, 3));
    });

    this.common.httpCallGet('service/three/lists').subscribe((res: any) => {
      this.datas = res.result;
    });

  }
}
