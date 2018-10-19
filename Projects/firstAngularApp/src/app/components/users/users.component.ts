import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  constructor() { }
  ngOnInit() {
    console.log('init...');

      this.users = [
        {
          firstName: 'Jordan',
          lastName: 'Castillo',
          age: 1,
          address: {
            street: 'abc st',
            city: 'sm',
            state: 'CA'
          },
          image: "https://loremflickr.com/320/240"
        },
        {
          firstName: 'Kiki',
          lastName: 'Anon',
          age: 1,
          address: {
            street: 'abc st',
            city: 'sm',
            state: 'CA'
          },
          image: "https://loremflickr.com/320/246"
        },
        {
          firstName: 'Bloom',
          lastName: 'Flowa',
          age: 1,
          address: {
            street: 'abc st',
            city: ' sm',
            state: 'CA'
          },
          image: "https://loremflickr.com/320/249"
        }
      ];

    this.addUser(
      {
        firstName: 'Duke',
        lastName: 'Willhelm'
    }
    );
    this.loaded = true;
  }

  addUser(user: User){
    this.users.push(user);
  }

}
