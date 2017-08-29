import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BusinessOwnerPage } from "../pages/business-owner/business-owner";
import { InfluencersPage } from "../pages/influencers/influencers";
import { PremiumPage } from "../pages/premium/premium";
import { PaymentPage } from "../pages/payment-history/payment-history";
import { MessageListPage } from "../pages/message-list/messgae-list";

@Component({
  templateUrl: 'app.html',
  styles: [`  .sidebar-button{
    background: rgba(0, 0, 0, 0.59);
    color: white;
  }
  .sidebar-button:active{
    color: #00bcd4;
  }

  .sidebar-header{
    color: white;
    height:180px;
    box-shadow: 0px 2px 15px #00bcd4;
  }`]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon:'home' },
      { title: 'Business Owners', component: BusinessOwnerPage , icon: 'briefcase' },
      { title: 'Social Influencers', component: InfluencersPage , icon: 'contacts'  },
      { title: 'Messages', component: MessageListPage , icon: 'contacts'  },
      { title: 'Premium Members', component: PremiumPage , icon:'star' },
      { title: 'Payment History', component: PaymentPage , icon:'logo-usd' },
      // { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
