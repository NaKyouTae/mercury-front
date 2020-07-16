import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormsService } from 'src/app/shared/util/forms.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css'],
})
export class GradeComponent implements OnInit {
  public data: any;
  public roleData: any;
  public fields: any = [
    { title: '일렬 번호', width: 10, field: 'idx' },
    { title: '등급 명', width: 30, field: 'gradeName' },
    { title: '시작 범위', width: 20, field: 'startRange' },
    { title: '끝 범위', width: 20, field: 'endRange' },
    { title: '생성 일자', width: 20, field: 'insertDate' },
  ];
  public newform = new FormGroup({
    gradeName: new FormControl('', Validators.required),
    startRange: new FormControl('', Validators.required),
    endRange: new FormControl('', Validators.required),
  });
  public form = new FormGroup({
    idx: new FormControl({ value: '', disabled: true }, Validators.required),
    gradeName: new FormControl({ value: '' }, Validators.required),
    startRange: new FormControl({ value: '' }, Validators.required),
    endRange: new FormControl({ value: '' }, Validators.required),
    insertDate: new FormControl({ value: '', disabled: true }, Validators.required),
  });
  constructor(private common: CommonHttpService, private formservice: FormsService) { }

  ngOnInit() {
    this.search();
  }

  public search() {
    this.common.httpCallGet('service/grades').subscribe((res: any) => {
      this.data = res.result;
    });
  }

  public onDblClick(data: any) {
    this.form.patchValue(data);
  }

  public onClose(template: any) {
    template.style.display = 'none';
    this.newform.reset({
      gradeName: '',
      startRange: '',
      endRange: '',
    });
  }

  public onCreate(e: any, template: any) {
    const data = this.formservice.formToData(e);

    this.common.httpCallPost('service/grades', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        template.style.display = 'none';
        this.search();
        this.newform.reset({
          gradeName: '',
          startRange: '',
          endRange: '',
        });
      }
    });
  }

  public onUpdate(e: any, template: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallPut('service/grades/' + data.idx, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        template.style.display = 'none';
        this.search();
      }
    });
  }

  public onDelete(e: any, template: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallDelete('service/grades/' + data.idx, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        template.style.display = 'none';
        this.search();
      }
    });
  }
}
