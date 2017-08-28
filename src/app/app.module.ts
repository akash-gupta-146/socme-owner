import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BusinessOwnerPage } from "../pages/business-owner/business-owner";
import { InfluencersPage } from "../pages/influencers/influencers";
import { PremiumPage } from "../pages/premium/premium";
import { PaymentPage } from "../pages/payment-history/payment-history";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    BusinessOwnerPage,
    InfluencersPage,
    PremiumPage,
    PaymentPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    BusinessOwnerPage,
    InfluencersPage,
    PremiumPage,
    PaymentPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
