import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  public title: any;
  public width: any;
  public content: any;
  public btnCount: any;
  public centerBtnTitle: any;
  public rightBtnTitle: any;

  public eventResult: Subject<boolean>;

  constructor(private bsModalRef: BsModalRef, private matDialog: MatDialog) { }

  ngOnInit() {
    this.eventResult = new Subject<boolean>();
    // Bootstrap 로드 시 스크롤 하단으로 내려가는 증상 해결하기 위함;
    window.scroll(0, 0);
  }

  // Modal Close
  public onClickClose() {
    this.eventResult.next(false);
    this.bsModalRef.hide();
  }

  // Modal Center
  public onClicCenterBtn() {
    this.eventResult.next(true);
    this.bsModalRef.hide();
  }

  // Modal Confirm
  public onClicRightBtn() {
    this.eventResult.next(true);
    this.bsModalRef.hide();
  }
}
