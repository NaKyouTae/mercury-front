import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { FormsService } from 'src/app/shared/util/forms.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  public data: any;

  public form = new FormGroup({
    idx: new FormControl(''),
    roleName: new FormControl('', Validators.required),
    insertDate: new FormControl(''),
    changeDate: new FormControl('')
  });

  constructor(private common: CommonHttpService, private formservice: FormsService) { }

  ngOnInit() {
    this.search();
  }

  search() {
    this.common.httpCallGet('service/roles').subscribe((res: any) => {
      this.data = res.result;
    });
  }

  onDblClick(data: any) {
    this.form.patchValue(data);
  }

  onClose(template: any) {
    template.style.display = 'none';

    this.form.reset({
      idx: '',
      roleName: '',
      insertDate: '',
      changeDate: ''
    });
  }

  onCreate(e: any, template: any) {
    const data = this.formservice.formToData(e);

    this.common.httpCallPost('service/roles', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        template.style.display = 'none';
        this.search();
      }
    });
  }

  onUpdate(e: any, template: any) {
    template.style.display = 'none';

    const data: any = this.formservice.formToData(e);

    this.common.httpCallPut('service/roles/' + data.idx, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        template.style.display = 'none';
        this.search();
      }
    });
  }

  onDelete(e: any, template: any) {
    template.style.display = 'none';

    const data: any = this.formservice.formToData(e);

    this.common.httpCallDelete('service/roles/' + data.idx, data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        template.style.display = 'none';
        this.search();
      }
    });
  }

}
