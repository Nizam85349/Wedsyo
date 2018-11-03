import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Commonservice } from '../../providers/commonservice';
import { Apiservice } from '../../providers/apiservice';

import * as $ from "jquery";
import '../../assets/js/custom.js';

declare var customjs: any;

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {
    result: any;
    homeData: any;
    sliders: any = [];
    bridgeDetails: any = [];
    groomDetails: any = [];
    WeddingAlbumDetails: any = [];
    WeddingContactDetails: any = [];
    AlbumPhotos: any = [];
    AlbumEvents: any = [];
    bride_first_name: any;
    bride_first_letter: any;
    groom_first_name: any;
    groom_first_letter: any;
    

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private commonservice: Commonservice,
        private apiservice: Apiservice,
    ) {
        this.get_Album_Slides();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
       // this.slider();
        //new customjs();
    }


    get_Album_Slides() {
        var params = {
            album_id: 1
        }
        this.commonservice.showLoader();
        this.apiservice.getAlbumSlides(params).then((res) => {
            this.result = res;
            this.sliders = this.result.data[0].slider_photos;
            console.log("Sliders");
            console.log(this.sliders);
            console.log("Sliders");
            this.get_wedding_album_details();
        }).catch((error) => {
            this.commonservice.hideLoader();      
            console.log('Error ==========> ', error);
        });
    }


    get_wedding_album_details() {
        var params = {
            album_id: 4
        }
        this.apiservice.getWeddingAlbumDetails(params).then((res) => {
            this.result = res;
            this.WeddingAlbumDetails = this.result.data;
            this.bride_first_name = this.result.bride_first_name;
            this.bride_first_letter = this.result.bride_first_letter;
            this.groom_first_name = this.result.groom_first_name;
            this.groom_first_letter = this.result.groom_first_letter;
            console.log("getWeddingAlbumDetails");
            console.log(this.WeddingAlbumDetails);
            console.log("getWeddingAlbumDetails");
            this.get_Bride_Details();
            
        }).catch((error) => {
            this.commonservice.hideLoader();            
            console.log('Error==================>', error);
        });
    }


    get_Bride_Details() {
        var params = {
            album_id: 1
        }
        this.apiservice.getBrideDetails(params).then((res) => {
            this.result = res;
            this.bridgeDetails = this.result.data;
            console.log("getBrideDetails");
            console.log(this.bridgeDetails);
            console.log("getBrideDetails");
           this.get_Groom_Details();
        
        }).catch((error) => {
            this.commonservice.hideLoader();            
            console.log('Error=================>', error);
        });
    }


    get_Groom_Details() {
        var params = {
            album_id: 1
        }
        this.apiservice.getGroomDetails(params).then((res) => {
            this.result = res;
            this.groomDetails = this.result.data;
            console.log("getGroomDetails");
            console.log(this.groomDetails);
            console.log("getGroomDetails");
            this.get_album_photos();
        }).catch((error) => {
            this.commonservice.hideLoader();
            console.log('Error=================>', error);
        });
    }


    get_album_photos() {
        var params = {
            album_id: 4
        }
        this.apiservice.getAlbumPhotos(params).then((res) => {
            this.result = res;
            this.AlbumPhotos = this.result.data;
            console.log("get_album_photos");
            console.log(this.AlbumPhotos);
            console.log("get_album_photos");
            this.get_album_event();
        }).catch((error) => {
            this.commonservice.hideLoader();
            console.log('Error ===============>', error);
        });
    }


    get_album_event() {
        var params = {
            album_id: 4
        }
        this.apiservice.getAlbumEvent(params).then((res) => {
            this.commonservice.hideLoader();
            this.result = res;
            this.AlbumEvents = this.result.data;
            console.log("get_album_event");
            console.log(this.AlbumEvents);
            console.log("get_album_event");
            this.get_wedding_contact_details();
        }).catch((error) => {
            this.commonservice.hideLoader();
            console.log('Error ===============>', error);
        });
    }

    get_wedding_contact_details() {
        var params = {
            album_id: 4
        }
        this.apiservice.getWeddingContactDetails(params).then((res) => {
            this.result = res;
            this.WeddingContactDetails = this.result.data;
            console.log("get_wedding_contact_details");
            console.log(this.WeddingContactDetails);
            console.log("get_wedding_contact_details");
        }).catch((error) => {
            this.commonservice.hideLoader();
            console.log('Error ===============>', error);
        });
    }


    


    


    

    



    slider() {

        // $(document).ready(function(){
        //   alert('hello js working');
        // });

    }

}
