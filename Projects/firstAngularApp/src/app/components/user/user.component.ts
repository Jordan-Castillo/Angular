import { Component } from '@angular/core';
//@ts-ignore this is called a decorator, adds extra info to our component
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  //@ts-ignore template: '<h2>Jordan</h2>'
})

export class UserComponent {
  firstName: string;
  lastName: string;
  age: number;
  address;
/**example datatypes
*/
  constructor(){
    this.firstName = 'Jordan';
    this.lastName = 'Castillo';
    this.age = 30;
    this.address = {
      street: '400 Low st.',
      city: 'Santa Maria',
      state: 'CA'
    };
  }
  sayHello(){
    console.log("Hello " + this.firstName);

  }
  hasBirthday(){
    this.age += 1;
  }
}