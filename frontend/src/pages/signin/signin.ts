import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';

// providers
import { GlobalProvider } from '../../providers/global/global';
import { UserProvider } from '../../providers/user/user';

// pages
import { MapPage } from '../map/map';


@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})

export class SigninPage {

  form: any
  isFormLoaded: boolean = false
  isGeolocated: boolean = false
  isGeocoder: boolean = false

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private _socket: Socket,
    private _userProvider: UserProvider,
    private _globalProvider: GlobalProvider
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    })
    this.isFormLoaded = true
  }


  signin() {
    let form = this.form

    if(form.valid) {
      let loading = this.loadingCtrl.create({
        content: 'Cargando...'
      })
      loading.present()

      this._userProvider.login(form.value).subscribe(
        (response: any) => {
          loading.dismiss()

          let profile = {
            email: response.email,
            name: response.name,
            city: response.city,
            user_id: response.user_id
          }
          let token = response.token

          this._socket.connect()
          this._socket.emit('set-nickname', {id: profile.user_id, name: profile.name});

          this._globalProvider.setStorage('token', JSON.stringify(profile))
          this._globalProvider.setStorage('profile', token)
          this.navCtrl.setRoot(MapPage)
        },
        (error) => {
          loading.dismiss()
          this._globalProvider.toast('Usuario o contraseña incorrectos')
        }
      )
    }

  }

}