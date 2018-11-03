import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Platform } from 'ionic-angular';
import { Commonservice } from './commonservice';
import { Geolocation } from '@ionic-native/geolocation';
import { Apiservice } from './apiservice';


@Injectable()
export class Nativeservice {
    loading: any;
    alert: any;
    image: any;
    Promise: any;
    resolve: any;
    reject: any;
    cameraPhoto: any;
    locationAddress: any;
    title: any;

    constructor(
        private camera: Camera,
        public plt: Platform,
        private commonservice: Commonservice,
        private geolocation: Geolocation,
        private apiservice: Apiservice,        

    ) {
        console.log('Hello Nativeservice');
    }


    getpicture(sourceType) {
        return new Promise((resolve, reject) => {
            var options = {
                quality: 50,
                destinationType: this.camera.DestinationType.FILE_URI,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: sourceType,
                correctOrientation: true
            };
            this.camera.getPicture(options).then((res) => {
                resolve(res)
            }, (err) => {
                console.log(err);
                reject(err);
            });
        });
    }




    location() {
        var self = this;
        return new Promise((resolve, reject) => {
            this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((res) => {
                resolve(res);
            }).catch((err) => {
                console.log('Error getting location', err);
                var error = 'Error in getting location';
                reject(error);
            });

        });
    }





}
