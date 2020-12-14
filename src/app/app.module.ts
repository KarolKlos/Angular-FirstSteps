import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import new component
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warning/warning.component';
import { SuccesComponent } from './succes/succes.component';
import { WarningTextComponent } from './warningtext/warningtext.component';
import { SuccesTextComponent } from './succestext/succestext.component';
import { AttentionComponent } from './attention/attention.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';

// Decorator
@NgModule({
  declarations: [
    AppComponent,
    // add new component
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SuccesComponent,
    WarningTextComponent,
    SuccesTextComponent,
    AttentionComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
