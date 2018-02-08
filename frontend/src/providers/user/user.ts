import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Providers
import { GlobalProvider } from '../global/global';


@Injectable()

export class UserProvider {

  constructor(
    public http: HttpClient,
    private _globalProvider: GlobalProvider
  ) { }


  setUser(formData) {
    let data = JSON.stringify(formData);
    let options = this._globalProvider.headersBuilder(null, data);

    return this.http.post(`${ this._globalProvider.apiUrl }/newuser`, data, options);
  }

}
