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
  currentClasses= {};
  currentStyles= {};
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
          image: 'https://loremflickr.com/320/240',
          isActive: true,
          balance: 100,
          registered: new Date('01/02/2018 08:30:00')
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
          image: "https://loremflickr.com/320/246",
          isActive: false,
          balance: 160,
          registered: new Date('03/12/2012 06:30:50')
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
          image: "https://loremflickr.com/320/249",
          isActive: true,
          balance: 15,
          registered: new Date('11/11/2011 08:30:00')
        }
      ];

    this.addUser(
      {
        firstName: 'Duke',
        lastName: 'Willhelm',
        image: "https://loremflickr.com/320/190"
    }
    );
    this.loaded = true;
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }
  setCurrentClasses() {
    this.currentClasses= {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    };
  }
  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px'
    };
  }

}
