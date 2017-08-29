import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'premium',
  templateUrl: 'premium.html',
  styles: [`
    .progress_bar1 {
      color: #FF9800 !important;
    }
    
  `
]
})
export class PremiumPage {

  constructor(public navCtrl: NavController) {

  }

}
