import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/shared/util/forms.service';

@Component({
  selector: 'app-week-word',
  templateUrl: './week-word.component.html',
  styleUrls: ['./week-word.component.css'],
})
export class WeekWordComponent implements OnInit {
  public data: any;
  public fields: any = [
    { title: '일렬 번호', width: 10, field: 'idx' },
    { title: '그룹', width: 15, field: 'wordGroup' },
    { title: '제시어', width: 15, field: 'word' },
    { title: '설명', width: 15, field: 'description' },
    { title: '시작 일자', width: 15, field: 'startDate' },
    { title: '마감 일자', width: 15, field: 'endDate' },
    { title: '생성 일자', width: 15, field: 'insertDate' },
  ];
  public newform = new FormGroup({
    word: new FormControl('', Validators.required),
    wordGroup: new FormControl('', Validators.required),
    startDate: new FormControl('00:00:00', Validators.required),
    endDate: new FormControl('23:59:59', Validators.required),
    description: new FormControl('', Validators.required),
  });

  public form = new FormGroup({
    idx: new FormControl({ value: null, disabled: true }),
    wordGroup: new FormControl({ value: null }, Validators.required),
    word: new FormControl({ value: null }, Validators.required),
    insertDate: new FormControl({ value: null, disabled: true }),
    startDate: new FormControl({ value: null }, Validators.required),
    endDate: new FormControl({ value: null }, Validators.required),
    description: new FormControl({ value: null }, Validators.required),
  });
  constructor(private common: CommonHttpService, private formservice: FormsService) {}

  ngOnInit() {
    this.search();
  }

  public search() {
    this.common.httpCallGet('service/weekword/lists').subscribe((res: any) => {
      this.data = res.result;
      console.log(res);
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
    this.common.httpCallPost('service/weekword/words', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        alert(res.message);
        this.search();
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
    this.common.httpCallPut('service/weekword/words/' + data.idx, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        alert(res.message);
        this.search();
        template.style.display = 'none';
      }
    });
  }
  public onDelete(e: any, template: any) {
    const data: any = this.formservice.formToData(e);
    this.common.httpCallDelete('service/weekword/words/' + data.idx, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        alert(res.message);
        this.search();
        template.style.display = 'none';
      }
    });
  }
}
