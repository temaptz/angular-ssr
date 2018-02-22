import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

export class AsyncService {
    private fakeData = [
        { name: 'one' },
        { name: 'two' },
        { name: 'three' },
    ];

    constructor() {}

    getData(): Observable<any> {
        return Observable.of(this.fakeData).delay(5000);
    }
}