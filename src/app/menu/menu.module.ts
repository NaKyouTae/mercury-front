import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HonorModule } from "./honor/honor.module";
import { ThreeModule } from "./three/three.module";
import { TwoModule } from "./two/two.module";
import { NoticeModule } from "./notice/notice.module";
import { HonorComponent } from "./honor/honor.component";
import { ThreeComponent } from "./three/three.component";
import { TwoComponent } from "./two/two.component";
import { NoticeComponent } from "./notice/notice.component";
import { WordComponent } from './word/word.component';
import { UserContentsComponent } from './n-content/user-contents/user-contents.component';
import { UserListComponent } from './n-content/user-list/user-list.component';

@NgModule({
  declarations: [HonorComponent, ThreeComponent, TwoComponent, NoticeComponent, WordComponent, UserContentsComponent, UserListComponent],
  imports: [CommonModule]
})
export class MenuModule {}
