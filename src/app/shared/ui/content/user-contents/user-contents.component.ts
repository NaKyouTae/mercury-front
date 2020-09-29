import { Component, OnInit, Input } from '@angular/core';
import { CommonHttpService } from 'src/app/shared/common/http/common-http.service';
import { FormsService } from 'src/app/shared/util/forms.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ObservableService } from 'src/app/shared/common/observable/observable.service';
import { JwtService } from 'src/app/shared/common/jwt/jwt.service';

@Component({
  selector: 'app-user-contents',
  templateUrl: './user-contents.component.html',
  styleUrls: ['./user-contents.component.css'],
})
export class UserContentsComponent implements OnInit {
  constructor(
    private common: CommonHttpService,
    private formservice: FormsService,
    private observableService: ObservableService,
    private jwt: JwtService) { }

  @Input() public contents: any = new Array<any>();
  @Input() public type: string;

  public userName: any = this.jwt.getJWTUserKey('aud') !== null ? this.jwt.getJWTUserKey('aud') : '';
  public userIdx: any = this.jwt.getJWTUserKey('user') !== null ? this.jwt.getJWTUserKey('user').idx : '';
  public userCheck: any = this.jwt.getJWTUserKey('aud') !== null ? true : false;

  public threeForm = new FormGroup({
    contentOne: new FormControl(''),
    contentTwo: new FormControl(''),
    contentThree: new FormControl(''),
    userName: new FormControl(''),
    userIdx: new FormControl(''),
  });

  public twoForm = new FormGroup({
    contentOne: new FormControl(''),
    contentTwo: new FormControl(''),
    userName: new FormControl(''),
    userIdx: new FormControl(''),
  });

  ngOnInit() { }

  public inThree(e: any) {
    e.userName.setValue(this.userName);
    e.userIdx.setValue(this.userIdx);
    const data = this.formservice.formToData(e);
    this.common.httpCallPost('service/three', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.threeForm.reset(this.formservice.initialForm(this.threeForm));
        this.observableService.getList('three');
      }
    });
  }

  public inTwo(e: any) {
    e.userName.setValue(this.userName);
    e.userIdx.setValue(this.userIdx);
    const data = this.formservice.formToData(e);
    this.common.httpCallPost('service/twice', data).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        this.twoForm.reset(this.formservice.initialForm(this.twoForm));
        this.observableService.getList('twice');
      }
    });
  }
}
