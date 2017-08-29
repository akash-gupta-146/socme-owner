import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'business-owner',
  templateUrl: 'business-owner.html',
  styles: [`
  .div_parent {
  margin: 12px auto;
  border-radius: 2px;
  // border: 1px solid #9E9E9E;
  height: 200px;
  // width: calc(100% - 24px);
  // font-size: 1.4rem;
  // background: #f9fdff;
  // -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  // box-shadow: 0 1px 50px rgba(0, 0, 0, 1.3);
  position: relative;
  text-align: center;
  font-size: 14px;
}

.div_parent .div_child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
}

.div_parent .div_child img{
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-repeat: no-repeat;
  margin-top:10px;
}


ion-col img{
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-top: 5px;
  background-repeat: no-repeat;
  margin-top:10px;
}

.div_social {
  display: inline-flex;
}

.div_social ion-icon {
  margin-right: 15px;
  text-align: center;
}

.div_social ion-icon:nth-child(1) {
  color: #3b5998;
}

.div_social ion-icon:nth-child(2) {
  color: #00aced;
}

.div_social ion-icon:nth-child(3) {
  color: #bb0000;
}

.progress_bar1 {
  color: #FF9800 !important;
}

.div_social h6 {
  font-size: 11px;
  color: gray;
  display: block;
}`]
})
export class BusinessOwnerPage {

  constructor(public navCtrl: NavController) {

  }

}
