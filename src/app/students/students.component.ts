import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import {Component} from "@angular/core";
import {Student} from "../Models/Student";
import {StudentService} from "../services/student.service";

@Component({
    selector: 'students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css'],
    providers: [Student]
})
export class StudentsComponent {
    students: Student[];

    constructor(private studentService:StudentService) {
        
    }

    ngOnInit() {
        this.studentService.getStudents().subscribe(students => console.log(students));
    }
}