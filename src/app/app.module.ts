import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import {AppConfigService} from './services/app-config.service'
import {CustomerPhoneNumberApi} from './interface/customer-phone-number/api/customerPhoneNumber.api'
import { CustomerPhoneNumberService } from './services/customer-phone-number-service';
import { CustomerPhoneNumberComponent } from './customer-phone-number/customer-phone-number.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select'
const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
      return appConfig.loadAppConfig();
  }
};

@NgModule({
  declarations: [
    AppComponent,
	CustomerPhoneNumberComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [CustomerPhoneNumberService,CustomerPhoneNumberApi,AppConfigService,
    {
        provide: APP_INITIALIZER,
        useFactory: appInitializerFn,
        multi: true,
        deps: [AppConfigService]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
