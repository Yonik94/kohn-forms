import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { CreateSurveyComponent } from './pages/create-survey/create-survey.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import {QuestionPreviewComponent } from './components/question-preview/question-preview.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { MultipleChoiceFieldComponent } from './components/multiple-choice-field/multiple-choice-field.component';
import { CheckboxFieldComponent } from './components/checkbox-field/checkbox-field.component';
import { FieldHeaderComponent } from './components/field-header/field-header.component';
import { FieldFooterComponent } from './components/field-footer/field-footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RecentFormListComponent } from './components/recent-form-list/recent-form-list.component';
import { RecentFormPreviewComponent } from './components/recent-form-preview/recent-form-preview.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyAccountComponent,
    CreateSurveyComponent,
    QuestionListComponent,
    QuestionPreviewComponent,
    HomePageComponent,
    TextFieldComponent,
    MultipleChoiceFieldComponent,
    CheckboxFieldComponent,
    FieldHeaderComponent,
    FieldFooterComponent,
    SignupComponent,
    RecentFormListComponent,
    RecentFormPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
