import { Component OnInit} from '@angular/core';
import { User } from '../../models/User';
//@ts-ignore this is called a decorator, adds extra info to our component
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  //@ts-ignore template: '<h2>Jordan</h2>'
})

export class UserComponent implements OnInit{
  User: User;
/**
 * Constructor is used most often
 * for dependency injection, rather than initializing variables
 */
  constructor(){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.User = {
      firstName: 'Jordan',
      lastName: 'Castillo',
      age: 1,
      address: {
        street: 'abc st',
        city: 'sm',
        state: 'CA'
      }
    };
  }

}
