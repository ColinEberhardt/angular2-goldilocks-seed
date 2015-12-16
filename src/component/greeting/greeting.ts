import {Component} from 'angular2/core';

@Component({
  selector: 'greeting',
  templateUrl: 'component/greeting/greeting.html',
  styleUrls: ['component/greeting/greeting.css']
})
export default class Greeting {
  greeting = 'Hello World';
}
