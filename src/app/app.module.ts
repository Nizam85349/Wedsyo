import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Apiservice } from '../providers/apiservice';
import { Commonservice } from '../providers/commonservice';
import { HttpModule } from '@angular/http';
import { Nativeservice } from '../providers/nativeservice';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';



@NgModule({
    declarations: [
        MyApp,
    ],
    imports: [
        BrowserModule,
        HttpModule,        
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Apiservice,
        Commonservice,
        Nativeservice,
        Camera,
        Geolocation,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
    ]
})
export class AppModule { }
