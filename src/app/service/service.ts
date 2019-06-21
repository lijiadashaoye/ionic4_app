import {
    Injectable
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import {
    EventEmitter
} from 'eventemitter3'

@Injectable({
    providedIn: 'root'
})
export class httpService {
    BaseUrl = 'http://jd.itying.com/';
    emitter = new EventEmitter();
    constructor(
        public http: HttpClient
    ) {}

    ajaxGet(data) {
        return this.http.get(this.BaseUrl + data.url)
    }

}