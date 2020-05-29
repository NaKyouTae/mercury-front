import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { FormsService } from 'src/app/shared/util/forms.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
})
export class MailComponent implements OnInit {
  // =========================================================================== [메일 설정 값]
  public host: any;
  public port: any;
  public email: any;
  public pw: any;
  // =========================================================================== [메일 설정 값]

  public data: any;
  public fields: any = [
    { title: '일렬 번호', width: 10, field: 'idx' },
    { title: '종류', width: 15, field: 'type' },
    { title: '내용', width: 15, field: 'content' },
    { title: '생성 일자', width: 15, field: 'insertDate' },
    { title: '사용 여부', width: 15, field: 'used' },
    { title: '배치 명', width: 15, field: 'batchId' },
  ];
  public newform = new FormGroup({
    type: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    batchId: new FormControl('', Validators.required),
  });

  public form = new FormGroup({
    idx: new FormControl({ value: '', disabled: true }),
    type: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    insertDate: new FormControl({ value: '', disabled: true }),
    used: new FormControl({ value: '', disabled: true }),
    batchId: new FormControl({ value: '' }, Validators.required),
  });

  constructor(private common: CommonHttpService, private formservice: FormsService) { }

  ngOnInit() {
    this.onSearch();
  }
  public onSearch() {
    this.common.httpCallGet('service/mails/templates').subscribe((res: any) => {
      this.data = res.result;
    });
  }

  public onDblClick(data: any) {
    this.form.patchValue(data);
  }

  public onClose(template: any) {
    template.style.display = 'none';
  }

  public onCreate(e: any, template: any) {
    const data = this.formservice.formToData(e);
    this.common.httpCallPost('service/mails/templates', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        alert(res.message);
        this.onSearch();
        template.style.display = 'none';
      }

      this.newform.reset({
        word: '',
        wordGroup: '',
        startDate: '00:00:00',
        endDate: '23:59:59',
      });
    });
  }

  public onUpdate(e: any, template: any) {
    const data: any = this.formservice.formToData(e);
    this.common.httpCallPut('service/mails/templates/' + data.idx, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        alert(res.message);
        this.onSearch();
        template.style.display = 'none';
      }
    });
  }

  public onDelete(e: any, template: any) {
    const data: any = this.formservice.formToData(e);
    this.common.httpCallDelete('service/mails/templates/' + data.idx, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        alert(res.message);
        this.onSearch();
        template.style.display = 'none';
      }
    });
  }
}
