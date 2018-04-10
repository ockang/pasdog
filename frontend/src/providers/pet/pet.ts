import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

// Providers
import { GlobalProvider } from '../global/global'


@Injectable()

export class PetProvider {

  constructor(
    public http: HttpClient,
    private _globalProvider: GlobalProvider
  ) { }

  getPet() {
    let options = this._globalProvider.headersBuilder(true)

    return this.http.post(`${ this._globalProvider.apiUrl }/listdog`, null, options)
  }

  setPet(formData) {
    let data = JSON.stringify(formData)
    let options = this._globalProvider.headersBuilder(true, data)

    return this.http.post(`${ this._globalProvider.apiUrl }/newdog`, data, options)
  }

}
