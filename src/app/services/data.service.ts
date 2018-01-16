import {Injectable} from '@angular/core';
import {Question} from '../models/Question';

@Injectable()
export class DataService {

  questions:Question[];

  constructor() {

    // this.questions = [
    //   {
    //     text: 'What is your name?',
    //     answer: 'My name is Sanjeev',
    //     hide: true
    //   },
    //   {
    //     text: 'What is your favorite color?',
    //     answer: 'My favorite color is white',
    //     hide: true
    //   },
    //   {
    //     text: 'What is your favorite language?',
    //     answer: 'My favorite language is NodeJS',
    //     hide: true
    //   }
    // ];
  }

  getQuestions() {
    if(localStorage.getItem('questions')===null){
      this.questions=[];
    }
    else {
      this.questions=JSON.parse(localStorage.getItem('questions'))
    }
    return this.questions;
  }

  addQuestion(quest:Question){
    let questions;
    this.questions.unshift(quest);
    if(localStorage.getItem('questions')===null){
      questions=[];
      questions.push(quest);
      localStorage.setItem('questions',JSON.stringify(questions))
    }
    else {
      questions=JSON.parse(localStorage.getItem('questions'));
      questions.unshift(quest);
      localStorage.setItem('questions',JSON.stringify(questions));
    }
  }

  removeQuestion(quest:Question){
    for(let h=0;h<this.questions.length;h++){
      if(quest===this.questions[h]){
        this.questions.splice(h,1);
        localStorage.setItem('questions',JSON.stringify(this.questions));
      }
    }
  }

}
