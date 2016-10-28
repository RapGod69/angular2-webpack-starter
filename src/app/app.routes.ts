import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { GayComponent } from './gay';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import {StudentsComponent} from "./students/";
import {StudentComponent} from "./student/";

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gay', component: GayComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'student/:id', component: StudentComponent },
  {
    path: 'detail', loadChildren: () => System.import('./+detail').then((comp: any) => {
      return comp.default;
    })
    ,
  },
  { path: '**',    component: NoContentComponent },
];
