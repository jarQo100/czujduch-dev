import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Stopien } from "./add/add.model";

@Injectable()
export class AuthService {
    constructor(private http: Http) {}

    add(stopien: Stopien) {
        console.log(stopien);
        const body = JSON.stringify(stopien);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/panel/add', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    // signin(user: User) {
    //     const body = JSON.stringify(user);
    //     const headers = new Headers({'Content-Type': 'application/json'});
    //     return this.http.post('http://localhost:3000/auth/signin', body, {headers: headers})
    //         .map((response: Response) => response.json())
    //         .catch((error: Response) => Observable.throw(error.json()));
    // }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}