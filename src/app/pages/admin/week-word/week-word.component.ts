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
    start_date: new FormControl('', Validators.required),
    end_date: new FormControl('', Validators.required)
  });
  public form = new FormGroup({
    idx: new FormControl(''),
    word_group: new FormControl(''),
    word: new FormControl(''),
    insert_date: new FormControl(''),
    start_date: new FormControl(''),
    end_date: new FormControl('')
  });
  constructor(private common: CommonHttpService, private formservice: FormsService) { }

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
        start_date: '',
        end_date: ''
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
