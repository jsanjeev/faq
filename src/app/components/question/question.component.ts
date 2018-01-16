import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../models/Question';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input('question') quest:Question;

  constructor(private dataService:DataService) {}

  ngOnInit() {
  }

  removeQuestion(quest:Question){
    this.dataService.removeQuestion(quest)
  }

}
