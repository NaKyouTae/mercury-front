import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThreeComponent } from "./three.component";
import { WordComponent } from '../n-content/word/word.component';
import { UserListComponent } from '../n-content/user-list/user-list.component';
import { UserContentsComponent } from '../n-content/user-contents/user-contents.component';

@NgModule({
  declarations: [ThreeComponent, WordComponent, UserListComponent, UserContentsComponent],
  imports: [CommonModule]
})
export class ThreeModule {}
