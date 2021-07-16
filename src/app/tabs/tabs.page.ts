import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  @ViewChild(IonTabs) tabs: IonTabs;

  public selected = '';
  public progresss = 42;

  constructor() {}

  public setSelectedTab(){
    console.log('CALLED')
    this.selected = this.tabs.getSelected();
  }

}
