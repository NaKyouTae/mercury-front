import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormsService } from 'src/app/shared/util/forms.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ModalService } from 'src/app/shared/ui/modal/modal.service';
import { AlertService } from 'src/app/shared/ui/alert/alert.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
})
export class MailComponent implements OnInit {
  // =========================================================================== [메일 설정 값]
  public mailHost: any;
  public mailPort: any;
  public mailAddress: any;
  public mailPassword: any;
  public mailSmtpProtocol: any;
  public mailSmtpAuth: any;
  public mailSmtpStartTlsEnable: any;
  public mailDebug: any;
  // =========================================================================== [메일 설정 값]

  public data: any;
  public fields: any = [
    { title: '템플릿 파일 명', width: 30, field: 'tempName', type: 'string' },
    { title: '템플릿 명', width: 5, field: 'type', type: 'string' },
    { title: '메일 제목', width: 40, field: 'title', type: 'string' },
    { title: '생성 일자', width: 15, field: 'insertDate', type: 'date' },
    { title: '일렬 번호', width: 10, field: 'idx', type: 'string' },
  ];
  public newform = new FormGroup({
    type: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    tempName: new FormControl('', Validators.required),
  });

  public form = new FormGroup({
    idx: new FormControl({ value: '', disabled: true }),
    type: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    tempName: new FormControl('', Validators.required),
    insertDate: new FormControl({ value: '', disabled: true }),
  });

  public configForm = new FormGroup({
    configName: new FormControl('', Validators.required),
    configType: new FormControl('', Validators.required),
    configValue: new FormControl('', Validators.required),
  });

  public editorConfig: AngularEditorConfig = {
    height: '100px',
    minHeight: '0',
  };

  constructor(
    private common: CommonHttpService,
    private formservice: FormsService,
    private modal: ModalService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.onSearch();
    this.seSystemConfig();
  }

  public seSystemConfig() {
    this.common.httpCallGet('service/system/config/type', { type: 'MAIL' }).subscribe((res: any) => {
      if (res.resultCode === 'OK' && res.result !== null) {
        this.mailHost = res.result.filter(config => config.configName === 'MAIL_HOST').configValue;
        this.mailPort = res.result.filter(config => config.configName === 'MAIL_PORT').configValue;
        this.mailAddress = res.result.filter(config => config.configName === 'MAIL_ADDRESS').configValue;
        this.mailPassword = res.result.filter(config => config.configName === 'MAIL_PASSWORD').configValue;
        this.mailSmtpProtocol = res.result.filter(config => config.configName === 'MAIL_SMTP_PROTOCOL').configValue;
        this.mailSmtpAuth = res.result.filter(config => config.configName === 'MAIL_SMTP_AUTH').configValue;
        this.mailSmtpStartTlsEnable = res.result.filter(config => config.configName === 'MAIL_SMTP_STARTTLS_ENABLE').configValue;
        this.mailDebug = res.result.filter(config => config.configName === 'MAIL_DEBUG').configValue;
      }
    });
  }

  public onSearch() {
    this.common.httpCallGet('service/mails/templates').subscribe((res: any) => {
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
    this.common.httpCallPost('service/mails/templates', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onSearch();
        this.onClose();

        this.newform.reset(this.formservice.initialForm(this.newform));

        this.alertService.showAlert('success', res.message);
      }
    });
  }

  public onUpdate(e: any) {
    const data: any = this.formservice.formToData(e);
    this.common.httpCallPut('service/mails/templates/' + data.idx, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onSearch();
        this.onClose();
        this.alertService.showAlert('success', res.message);
      }
    });
  }

  public onDelete(e: any) {
    const data: any = this.formservice.formToData(e);
    this.common.httpCallDelete('service/mails/templates/' + data.idx, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.onSearch();
        this.onClose();
        this.alertService.showAlert('success', res.message);
      }
    });
  }
}
