import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-week-word',
  templateUrl: './week-word.component.html',
  styleUrls: ['./week-word.component.css'],
})
export class WeekWordComponent implements OnInit {
  public data: any;

  public form = new FormGroup({
    idx: new FormControl(''),
    username: new FormControl(''),
    pw: new FormControl(''),
    insert_date: new FormControl(''),
    change_date: new FormControl(''),
  });
  constructor(private common: CommonHttpService) {}

  ngOnInit() {
    this.search();
  }

  public search() {
    this.common.httpCallGet('service/weekword/lists').subscribe((res: any) => {
      this.data = res.result;
      console.log(res);
    });
  }

  onDblClick(data: any) {
    this.form.patchValue(data);
  }
  onClose(template: any) {
    template.style.display = 'none';
  }
  onCreate(e: any, template: any) {
    // this.common.httpCallPost('service/');
  }
  onUpdate(e: any, template: any) {
    template.style.display = 'none';
  }
  onDelete(e: any, template: any) {
    template.style.display = 'none';
  }
}
