
import { Observable } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError, delay } from 'rxjs/operators';

const createUrl = (path: string) => {
    return (window?.location.origin || "http://localhost:3000") + path;
}
export const sendMessage = (content:string) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    return fromFetch(createUrl("/api/message"),  {
        method: 'POST',
        headers: myHeaders,
        body:  JSON.stringify({content}),
    }).pipe(delay(1000)).pipe(
        switchMap((res) => {
            if(!res.ok){
                throw new Error(res.statusText);
            }
            return res.json();
        }),
        catchError((err) => {
            console.error(err);
            return Observable.throw(err);
        })
    )

}




