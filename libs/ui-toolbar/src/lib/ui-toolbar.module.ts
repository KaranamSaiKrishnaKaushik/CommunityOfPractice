import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MaterialModule} from "@angular-production/material";

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    ToolbarComponent
  ],
  exports: [ToolbarComponent]
})
export class UiToolbarModule {}
