import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
import { Tab4Root } from '../pages';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root; 
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;
  
  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  tab4Title = " ";
  
  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
      this.tab1Title = 'Tour'; //values['TAB1_TITLE'];
      this.tab2Title = 'Station';// values['TAB2_TITLE'];
      this.tab3Title = 'Rad'; //values['TAB3_TITLE'];
      this.tab4Title = 'Netz'; //values['TAB3_TITLE'];
    });
  }
}
