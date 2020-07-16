import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormsService } from 'src/app/shared/util/forms.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  public data: any;
  public fields: any = [
    { title: 'Logger', width: 10, field: 'logger' },
    { title: 'Level', width: 5, field: 'level' },
    { title: 'Message', width: 80, field: 'message' },
    { title: '발생 일', width: 5, field: 'insertDate' },
  ];

  public form = new FormGroup({
    logger: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    insertDate: new FormControl('', Validators.required),
  });

  constructor(private common: CommonHttpService, private formservice: FormsService) { }

  ngOnInit() {
    this.onSearch();
  }


  public onSearch() {
    this.common.httpCallGet('service/loggers').subscribe((res: any) => {

      this.data = res.result;

    });
  }

  public onDblClick(data: any) {
    this.form.patchValue(data);
  }

  public onClose(template: any) {
    template.style.display = 'none';
    this.form.reset(this.formservice.initialForm(this.form));
  }

  public onDelete(e: any, template: any) {
    const data = this.formservice.formToData(e);
    this.common.httpCallDelete('service/loggers', data).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.onSearch();
        template.style.display = 'none';
      }
    });
  }
}
