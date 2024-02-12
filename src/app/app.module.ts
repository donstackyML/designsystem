import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxButtonModule, DxTextBoxModule,DxColorBoxModule, DxSelectBoxModule, DxNumberBoxModule, DxLookupModule, DxTagBoxModule, DxButtonGroupModule } from 'devextreme-angular';
import { EditorsComponent } from './components/editors/editors.component';
import { ButtonsComponent } from './components/buttons/buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    EditorsComponent,
    ButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxTextBoxModule,
    DxColorBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxLookupModule,
    DxTagBoxModule,
    DxButtonGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
