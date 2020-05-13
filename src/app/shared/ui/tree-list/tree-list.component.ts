import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsService } from '../../util/forms.service';
import { CommonHttpService } from '../../common/common-http.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'nkt-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css'],
})
export class CustomTreeListComponent implements OnInit {
  @Input() public data: any;
  @Input() public type: any;

  public fields: any;
  public roleData: any;

  public form = new FormGroup({
    title: new FormControl(Validators.required),
    menuGroup: new FormControl(Validators.required),
    url: new FormControl(Validators.required),
    menuOrder: new FormControl(Validators.required),
    level: new FormControl(Validators.required),
    roleIdx: new FormControl(Validators.required),
    roleTitle: new FormControl(Validators.required),
  });

  constructor(private common: CommonHttpService, private forms: FormsService) { }

  ngOnInit() {
    if (this.data !== undefined) {
      this.fields = Object.keys(this.data[0]);
      this.fields.forEach((item) => {
        if (item === 'children') {
          this.fields.splice(this.fields.indexOf(item), 1);
        }
      });
    }
  }

  public onCreateModal(temp: any) {
    temp.style.display = 'block';

    this.form.patchValue({
      title: null,
      menuGroup: null,
      url: '/my/',
      menuOrder: null,
      level: 1,
      child: 0,
      insertDate: null,
      parent: null,
      roleIdx: null,
      roleTitle: null,
    });
  }

  public onCreate(data: any, template: any) {
    const params: any = this.forms.formToData(data);

    this.common.httpCallPost('service/' + this.type, params).subscribe((res: any) => {
      if (res.resultCode === 'OK') {
        template.style.display = 'none';
        this.onSearch(params);
      }
    });
  }

  public onSearch(e: any) {
    this.common.httpCallGet('service/' + this.type + '/levels', { pidx: null }).subscribe((res: any) => {
      this.data = res.result;
    });
  }

  public onClose(e: any) {
    e.style.display = 'none';
  }

  public roleSearch() {
    this.common.httpCallGet('service/roles').subscribe((res: any) => {
      this.roleData = res.result;
    });
  }

  public roleChange(e: any) {
    this.form.controls.roleTitle.setValue(e.options[e.options.selectedIndex].label);
  }
}
