import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AppServices implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }
}
