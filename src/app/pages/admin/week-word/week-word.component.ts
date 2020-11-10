import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/shared/common/forms/forms.service';
import { ModalService } from 'src/app/shared/ui/modal/modal.service';
import { CustomAlertService } from 'src/app/shared/ui/alert/custom-alert.service';

@Component({
  selector: 'app-week-word',
  templateUrl: './week-word.component.html',
  styleUrls: ['./week-word.component.css'],
})
export class WeekWordComponent implements OnInit {
  public data: any;
  public fields: any = [
    { title: '일렬 번호', width: 10, field: 'idx', type: 'string' },
    { title: '그룹', width: 15, field: 'wordGroup', type: 'string' },
    { title: '제시어', width: 15, field: 'word', type: 'string' },
    { title: '설명', width: 15, field: 'description', type: 'string' },
    { title: '시작 일자', width: 15, field: 'startDate', type: 'date' },
    { title: '년', width: 15, field: 'year', type: 'number' },
    { title: '월', width: 15, field: 'month', type: 'number' },
    { title: '주', width: 15, field: 'weeks', type: 'number' },
    { title: '마감 일자', width: 15, field: 'endDate', type: 'date' },
    { title: '생성 일자', width: 15, field: 'insertDate', type: 'date' },
  ];
  public newform = new FormGroup({
    word: new FormControl('', Validators.required),
    wordGroup: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    month: new FormControl('', Validators.required),
    weeks: new FormControl('', Validators.required),
    startDate: new FormControl('00:00:00', Validators.required),
    endDate: new FormControl('23:59:59', Validators.required),
    description: new FormControl('', Validators.required),
  });

  public form = new FormGroup({
    idx: new FormControl({ value: null, disabled: true }),
    wordGroup: new FormControl({ value: null }, Validators.required),
    word: new FormControl({ value: null }, Validators.required),
    year: new FormControl({ value: null }, Validators.required),
    month: new FormControl({ value: null }, Validators.required),
    weeks: new FormControl({ value: null }, Validators.required),
    insertDate: new FormControl({ value: null, disabled: true }),
    startDate: new FormControl({ value: null }, Validators.required),
    endDate: new FormControl({ value: null }, Validators.required),
    description: new FormControl({ value: null }, Validators.required),
  });
  constructor(private common: CommonHttpService, private formservice: FormsService, private modal: ModalService, private alertService: CustomAlertService) {}

  ngOnInit() {
    this.search();
  }

  public search() {
    this.common.httpCallGet('service/words').subscribe((res: any) => {
      this.data = res.result;
    });
  }

  public onDblClick(data: any) {
    this.form.patchValue(data);
  }

  public onClose() {
    this.modal.onCloseAll();
  }

  public onCreate(e: any) {
    const data = this.formservice.formToData(e);

    this.common.httpCallPost('service/words', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.search();
        this.onClose();
        this.alertService.showAlert('success', res.message);
      }

      this.newform.reset({
        word: '',
        wordGroup: '',
        startDate: '00:00:00',
        endDate: '23:59:59',
      });
    });
  }

  public onUpdate(e: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallPut('service/words/' + data.idx, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.search();
        this.onClose();
        this.alertService.showAlert('success', res.message);
      }
    });
  }

  public onDelete(e: any) {
    const data: any = this.formservice.formToData(e);

    this.common.httpCallDelete('service/words/' + data.idx, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.search();
        this.onClose();
        this.alertService.showAlert('success', res.message);
      }
    });
  }
}
