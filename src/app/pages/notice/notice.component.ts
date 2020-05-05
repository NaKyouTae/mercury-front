import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
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
    { title: '제목', width: 80, field: 'title' },
    { title: '작성 일', width: 20, field: 'insertDate' },
  ];
  public userRoles: any = this.jwt.getJWTAccessKey('roles') === null ? [] : this.jwt.getJWTAccessKey('roles');
  public form = new FormGroup({
    content: new FormControl('', Validators.required),
    insertDate: new FormControl('', Validators.required),
    idx: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
  });

  constructor(private common: CommonHttpService, private formservice: FormsService, private jwt: JwtService) {}

  ngOnInit() {
    this.search();
  }

  search() {
    this.common.httpCallGet('service/notices').subscribe((res: any) => {
      this.data = res.result;
    });
  }

  onDblClick(data: any) {
    this.form.patchValue(data);
  }

  onClose(template: any) {
    template.style.display = 'none';
    this.form.reset({
      content: '',
    });
  }

  onCreate(e: any, template: any) {
    const data = this.formservice.formToData(e);
    this.common.httpCallPost('service/notices', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        template.style.display = 'none';
        this.search();
        this.form.reset({
          content: '',
        });
      }
    });
  }

  onUpdate(e: any, template: any) {
    const data: any = this.formservice.formToData(e);
    this.common.httpCallPut('service/notices/' + data.idx, data).subscribe((res: any) => {
      alert(res.message);
      this.search();
      template.style.display = 'none';
    });
  }

  onDelete(e: any, template: any) {
    const data: any = this.formservice.formToData(e);
    this.common.httpCallDelete('service/notices/' + data.idx, data).subscribe((res: any) => {
      alert(res.message);
      this.search();
      template.style.display = 'none';
    });
  }
}
