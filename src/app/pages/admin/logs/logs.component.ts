import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormsService } from 'src/app/shared/util/forms.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalService } from 'src/app/shared/ui/modal/modal.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
})
export class LogsComponent implements OnInit {
  public data: any;
  public fields: any = [
    { title: 'Logger', width: 10, field: 'logger', type: 'string' },
    { title: 'Level', width: 5, field: 'level', type: 'string' },
    { title: 'Message', width: 80, field: 'message', type: 'string' },
    { title: '발생 일', width: 5, field: 'insertDate', type: 'date' },
  ];

  public form = new FormGroup({
    logger: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    insertDate: new FormControl('', Validators.required),
  });

  constructor(private common: CommonHttpService, private formservice: FormsService, private modal: ModalService) {}

  ngOnInit() {
    this.onSearch();
  }

  public onSearch() {
    this.common.httpCallGet('service/loggers').subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.data = res.result;
      }
    });
  }

  public onDblClick(data: any) {
    this.form.patchValue(data);
  }

  public onClose() {
    this.modal.onCloseAll();
    this.form.reset(this.formservice.initialForm(this.form));
  }

  public onDelete(e: any, template: any) {
    const data = this.formservice.formToData(e);
    this.common.httpCallDelete('service/loggers', data).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.onSearch();
        this.onClose();
      }
    });
  }
}
