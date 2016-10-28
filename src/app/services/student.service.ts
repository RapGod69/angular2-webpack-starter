import {Injectable} from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {AppConfig} from "../config/appConfig";
import {Observable} from 'rxjs/Rx';
import {Student} from "../Models/Student";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StudentService {
    private getStudentsRoute: string; 

    constructor (private http: Http) {
        this.getStudentsRoute = "students.php";
    }

    getStudents(): Observable<Array<Student>> {
        return this.http.get(`${AppConfig.apiUrl}/${this.getStudentsRoute}`).map((student:Response) => {
            let res = student.json();
            let students = [];

            res.forEach((student) => { students.push(new Student(student.name, student.surname, student.grup, student.id)) });

            return students;
        }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getStudent(id: number): Observable<Student> {
        return this.http.get(`${AppConfig.apiUrl}/${this.getStudentsRoute}?id=${id}`).map((student: Response) => {
            let res = student.json();
            console.log(res);
            if(res.name) {
                return new Student(res.name, res.surname, res.group, res.id);
            }

            return null;
        }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    saveStudent(student:Student): Observable<Object> {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        let options = new RequestOptions({ headers: headers })

        return this.http.post(`${AppConfig.apiUrl}/${this.getStudentsRoute}`, student.toUrlEncoding(), options).map((msg:Response) => {console.log(msg); return msg.json()})
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}