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

  public newform = new FormGroup({
    word: new FormControl('', Validators.required),
    word_group: new FormControl('', Validators.required),
    start_date: new FormControl('00:00:00', Validators.required),
    end_date: new FormControl('23:59:59', Validators.required),
    description: new FormControl('', Validators.required),
  });
  public form = new FormGroup({
    idx: new FormControl(''),
    word_group: new FormControl('', Validators.required),
    word: new FormControl('', Validators.required),
    insert_date: new FormControl(''),
    start_date: new FormControl('', Validators.required),
    end_date: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
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
        word_group: '',
        start_date: '00:00:00',
        end_date: '23:59:59',
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
