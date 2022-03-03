import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { UiToolbarModule } from '@angular-production/ui-toolbar'
import { AppComponent } from './app.component'
import { NxWelcomeComponent } from './nx-welcome.component'
import { MatCardModule } from '@angular/material/card'
import { MaterialModule } from '@angular-production/material'

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, MatCardModule, UiToolbarModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
