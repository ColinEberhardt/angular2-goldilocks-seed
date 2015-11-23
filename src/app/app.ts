import {Component, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'hello-world',
  templateUrl: 'app/app.html',
  styleUrls: ['app/app.css']
})
export class HelloWorld {
  greeting: String = 'Hello World';
}

bootstrap(HelloWorld);
