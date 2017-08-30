import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'message-list',
  templateUrl: 'message-list.html',
  styles: [`
  
  .apply_color {
      background-color: #b2dff4 !important;
    }

  `]
})
export class MessageListPage {

  constructor(public navCtrl: NavController) {

  }

}
