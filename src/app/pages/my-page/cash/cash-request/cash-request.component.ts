import { Component, OnInit } from '@angular/core';
import { FormsService } from 'src/app/shared/util/forms.service';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';

@Component({
  selector: 'app-cash-request',
  templateUrl: './cash-request.component.html',
  styleUrls: ['./cash-request.component.css']
})
export class CashRequestComponent implements OnInit {

  constructor(private common: CommonHttpService, private forms: FormsService) { }

  ngOnInit() {
  }

  public onRequest() {
    this.common.httpCallPost('service/cashs').subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        alert(res.message);
      }
    });
  }
}
