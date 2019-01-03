import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { AboutComponent } from './about/about.component';
import { FitnessComponent } from './fitness/fitness.component';
import { EducationComponent } from './education/education.component';
import { FunComponent } from './fun/fun.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { ApplyFormComponent } from './apply-form/apply-form.component';
import { CommentsComponent } from './comments/comments.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    SlideShowComponent,
    AboutComponent,
    FitnessComponent,
    EducationComponent,
    FunComponent,
    ApplyFormComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
