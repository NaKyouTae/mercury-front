import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { JwtService } from './shared/common/jwt/jwt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'competition-angular';

  constructor(private router: Router, private jwt: JwtService) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    // this.router.navigateByUrl('/three');
    // console.log(this.jwt.getJWTRefresh());
    // console.log(this.jwt.getJWTAccess());
  }
}
