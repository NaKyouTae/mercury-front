import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/shared/util/forms.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
})
export class NoticeComponent implements OnInit {
  public data: any;
  public fields: any = [
    { title: '제목', width: 80, field: 'title', type: 'string' },
    { title: '작성 일', width: 20, field: 'insertDate', type: 'date' },
  ];
  public userRoles: any = this.jwt.getJWTUserKey('roles') === null ? [] : this.jwt.getJWTUserKey('roles');
  public form = new FormGroup({
    content: new FormControl('', Validators.required),
    insertDate: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
  });

  constructor(private common: CommonHttpService, private jwt: JwtService) {}

  ngOnInit() {
    this.search();
  }

  public search() {
    this.common.httpCallGet('service/notices').subscribe((res: any) => {
      this.data = res.result;
    });
  }

  public onDblClick(data: any) {
    this.form.patchValue(data);
  }
}
