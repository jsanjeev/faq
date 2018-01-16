import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';

import {AppServices} from './services/app.services';
import {AppRoutingModule} from './routes/app.routing.module';
import {AppMaterialModule} from './material/app.material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuestListComponent } from './components/quest-list/quest-list.component';
import {DataService} from './services/data.service';
import { QuestionComponent } from './components/question/question.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';


// for deployment use this command----> ng build --prod --base-href='yourURL'
// using github--->  npm install -g angular-cli-ghpages
// run ----->>     angular-cli-ghpages         ------------ to publish

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestListComponent,
    QuestionComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [AppServices,DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
