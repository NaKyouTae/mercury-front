import { Component, OnInit } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/common-http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/shared/util/forms.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public data: any;

  public newform = new FormGroup({
    username: new FormControl('', Validators.required),
    pw: new FormControl('', Validators.required),
    rep: new FormControl('', Validators.required)
  });
  public form = new FormGroup({
    idx: new FormControl(''),
    username: new FormControl(''),
    pw: new FormControl(''),
    insert_date: new FormControl(''),
    change_date: new FormControl(''),
  });
  constructor(private common: CommonHttpService, private formservice: FormsService) { }

  ngOnInit() {
    this.search();
  }



  search() {
    this.common.httpCallGet('service/user/lists').subscribe((res: any) => {
      this.data = res.result;
    });
  }
  onDblClick(data: any) {
    this.form.patchValue(data);
  }
  onClose(template: any) {
    template.style.display = 'none';
  }
  onCreate(e: any, template: any) {
    const data = this.formservice.formToData(e);
    // this.common.httpCallPost('service/');
    console.log(data);

    template.style.display = 'none';

    this.newform.reset({
      username: '',
      pw: '',
      rep: ''
    });
  }
  onUpdate(e: any, template: any) {
    template.style.display = 'none';
  }
  onDelete(e: any, template: any) {
    template.style.display = 'none';
  }

}
