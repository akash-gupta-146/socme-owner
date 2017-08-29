import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'payment-history',
  templateUrl: 'payment-history.html',
  styles: [`
    .date{
      color:gray;
    }
    ion-card-header{
      padding-bottom: 0px;
    }

    .cash {
      color: #2fd036 !important;
    }
  `]
})
export class PaymentPage {

  constructor(public navCtrl: NavController) {

  }

}
