import { Component } from '@angular/core';
import { Person } from '../app/models/Person'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'summary';
  person: Person = new Person;
}
