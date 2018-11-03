import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://salesring.in/CI';
//http://salesring.in/CI/Api/get_featured_album

@Injectable()

export class Apiservice {
    Promise: any;
    resolve: any;
    reject: any;
    constructor(public http: Http
    ) {
         
    }


    getAlbumSlides(credential) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post('http://salesring.in/CI/Api/get_album_slides', credential, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }



    getBrideDetails(credential) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type','application/x-www-form-urlencoded');
            this.http.post(apiUrl+'/Api/get_bride_details', credential, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });
    }

    


    getGroomDetails(credential) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json; charset=UTF-8');
            this.http.post(apiUrl + '/Api/get_groom_details', credential, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                    console.log(err);
                    
                });
        });
    }


    getWeddingAlbumDetails(credential) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json; charset=UTF-8');
            this.http.post(apiUrl + '/Api/get_wedding_album_details', credential, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                    console.log(err);
                    
                });
        });
    }


    getWeddingContactDetails(credential) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json; charset=UTF-8');
            this.http.post(apiUrl + '/Api/get_wedding_contact_details', credential, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                    console.log(err);
                    
                });
        });
    }


    getAlbumPhotos(credential) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json; charset=UTF-8');
            this.http.post(apiUrl + '/Api/get_album_photos', credential, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                    console.log(err);
                    
                });
        });
    }


    getAlbumEvent(credential) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json; charset=UTF-8');
            this.http.post(apiUrl + '/Api/get_album_event', credential, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                    console.log(err);
                    
                });
        });
    }



}
