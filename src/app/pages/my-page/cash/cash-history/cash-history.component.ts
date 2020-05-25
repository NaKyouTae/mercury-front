import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { FormsService } from 'src/app/shared/util/forms.service';

@Component({
  selector: 'app-cash-history',
  templateUrl: './cash-history.component.html',
  styleUrls: ['./cash-history.component.css']
})
export class CashHistoryComponent implements OnInit {

  public data: any;
  constructor(private common: CommonHttpService, private formservice: FormsService) { }

  ngOnInit() {
    this.onSearch();
  }

  public onSearch() {
    this.common.httpCallGet('service/cashs').subscribe((res: any) => {
      this.data = res.result;
    });
  }

  public onCancle(e: any) {
    const data: any = this.formservice.formToData(e);
    this.common.httpCallDelete('service/cashs/' + data.idx, data).subscribe((res: any) => {
      this.data = res.result;
    });
  }

}
