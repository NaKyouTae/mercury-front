import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  public type: any;
  public title: any;
  public message: any;

  public interval: any;

  constructor(
    private bsModalService: BsModalService,
    private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  public showAlert(type: string, content: any) {
    let title = '';
    switch (type) {
      case 'success': title = 'Success! '; break;
      case 'info': title = 'Info! '; break;
      case 'warning': title = 'Warning! '; break;
      case 'danger': title = 'Danger! '; break;
      default: break;
    }

    this.bsModalRef = this.bsModalService.show(AlertComponent, { initialState: { type, title, content } });

    // this.interval = setInterval(() => {
    //   this.bsModalRef.hide();
    //   clearTimeout(this.interval);
    // }, 3000);
  }
}
