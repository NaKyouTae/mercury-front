import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { FormsService } from 'src/app/shared/util/forms.service';

@Component({
  selector: 'app-login-history',
  templateUrl: './login-history.component.html',
  styleUrls: ['./login-history.component.css'],
})
export class LoginHistoryComponent implements OnInit {
  public data: any;
  public fields: any = [
    { title: '일렬번호', width: 10, field: 'idx' },
    { title: '접속 일자', width: 20, field: 'accessDate' },
    { title: '브라우저', width: 50, field: 'browser' },
    { title: '사용자 명', width: 10, field: 'userName' },
    { title: '사용자 일렬번호', width: 10, field: 'userIdx' },
  ];

  public form = new FormGroup({
    idx: new FormControl({ value: '', disabled: true }, Validators.required),
    accessDate: new FormControl({ value: '', disabled: true }, Validators.required),
    browser: new FormControl({ value: '', disabled: true }, Validators.required),
    userName: new FormControl({ value: '', disabled: true }, Validators.required),
    userIdx: new FormControl({ value: '', disabled: true }, Validators.required),
  });

  constructor(private common: CommonHttpService, private formservice: FormsService) {}

  ngOnInit() {
    this.onSearch();
  }

  public onSearch() {
    this.common.httpCallGet('service/historys/logins').subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.data = res.result;
      }
    });
  }

  public onDblClick(data: any) {
    this.form.patchValue(data);
  }

  public onClose(template: any) {
    template.style.display = 'none';
  }

  public onDelete(e: any, template: any) {
    template.style.display = 'none';

    const data: any = this.formservice.formToData(e);

    this.common.httpCallDelete('service/roles/' + data.idx, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        template.style.display = 'none';
        this.onSearch();
      }
    });
  }
}
