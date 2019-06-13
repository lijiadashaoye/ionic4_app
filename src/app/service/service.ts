import {
    Injectable
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class httpService {
    BaseUrl = 'http://jd.itying.com/';

    constructor(public http: HttpClient) {}

    ajaxGet(data) {
        return this.http.get(this.BaseUrl + data.url)
    }
}