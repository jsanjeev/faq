import { Component, OnInit } from '@angular/core';
import {Question} from '../../models/Question';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.css']
})
export class QuestListComponent implements OnInit {

  questions:Question[];

  constructor(public dataService:DataService) {
  }

  ngOnInit() {
    this.questions=this.dataService.getQuestions();
  }

  addQuestion(question:Question){
    this.dataService.addQuestion(question)
  }

}
