import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { FrontPage} from "../pages/front/front"
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { KehadiranPage } from "../pages/kehadiran/kehadiran";
import { JadualPage} from "../pages/jadual/jadual";
import { PelajarPage} from "../pages/pelajar/pelajar";
import {EditPage } from "../pages/edit/edit"



export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = FrontPage;

  appMenuItems: Array<MenuItem>;
userData:any;
username:any;
userRole:any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard
  ) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Kehadiran', component: KehadiranPage, icon: 'list'},
      {title: 'Jadual', component: JadualPage, icon: 'heart'},
      {title: 'Pelajar', component: PelajarPage, icon: 'infinite'},
      // {title: 'Kehadiran2', component: Kehadiran2Page, icon: 'heart'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
    
      this.userData = JSON.parse(window.localStorage.getItem('userData'));
      this.username=this.userData.nama_pengajar;
      this.userRole=this.userData.email_pengajar;


      //*** Control Keyboard
      // this.keyboard.disableScroll(true);
    });
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    window.localStorage.removeItem('userData');
    this.nav.setRoot(LoginPage);
  }

  editprofile() {
    this.nav.setRoot(EditPage);
  }

}
