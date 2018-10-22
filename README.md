This repo will include all practice projects written in angular,
    as well as useful notes on the differences between React and Angular.


React vs. Angular
    Ang - Core library includes Routing functionality, this must be imported inside React    Ang - Core library includes Routing functionality, this must be imported inside React

NG commands:
    ng generate component <destination> <flags>
        ex:
            ng generate component components\users --spec=false
        or  ng g c components\users --spec=false
                                    ^this flag tells ng to not generate the testing files because we will not be using them
                ^generates the component, and puts the necessary information inside the app.module.ts file

    ng serve <flags>
        ex:
            ng serve -o
                ^serve starts running the scripts of the webpage locally
                      ^-o then opens the scripts in the local web browser
            ng serve --poll=2000
                        ^ watches the file for updates and updates the webpage automatically

Installed Bootstrap:
            npm install bootstrap@4.0.0 jquery popper.js   <-- specified the version of Bootstrap, it has 2 dependencies

            Now go into angular.json file, find where it says:
                        "styles": [...]
                and add: 
                            "./node_modules/bootstrap/dist/css/bootstrap.css"

                        "scripts": [...]
                and add: 
                            "./node_modules/bootstrap/dist/js/bootstrap.js"
                            "./node_modules/popper.js/dist/umd/popper.js"
                            "./node_modules/jquery/dist/js/jquery.js"
            Now the page has been updated with bootstrap css!!!! woot woot
    Examples in use:
       <li> Below, the "card card-body" tags, makes the list item have a border with rounded edges. Roughly looks like a card.
            "mb-2" specifies that it needs some spacing between itself and the objects around it
        <ul> "list-group" specifies that this <ul> is going to contain multiple list items
            <li> "list-group-item" gives each item in the list a card-style CSS, similar to the one that the outer <li> has
  <li class="card card-body mb-2" *ngFor="let user of users" >
    <h3>{{user.firstName}} {{user.lastName}}</h3>
    <ul class="list-group" *ngIf="showExtended && user.age && user.address" >
      <li class="list-group-item">Age: {{user.age}}</li>
      <li class="list-group-item">Address: {{user.address.street}}, {{user.address.city}}, {{user.address.state}}</li>
    </ul>
  </li>

Angular Specifics:
    Property Binding:
        <img *ngIf="user.image" class="img-fluid" [src]="user.image" alt="random image">
        ^-- the [src]="user.image" is using something called Property Binding.
        What it does, is binds the normal property of the tag inside the brackets, in this case that is "src"
            And binds that property to the variable that you provide as a string
            EX: https://angular.io/guide/cheatsheet under Template Syntax
        ♥ Can be used for any type, as opposed to string-interpolation which only works for strings
        ±
        ♥
    String Interpolation:
        When you declare a datatype inside your class, it can be referenced inside your .html file of the same name.
            i.e. users.component.html has access to datatypes declared inside users.component.html
            Ex:
                 users: User[];        <--- all inside the .ts file
                 this.users = [          
                    {
                    firstName: 'Jordan', <--- all inside the .ts file
                    lastName: 'Castillo',
                    age: 1,
                    address: {
                        street: 'abc st',   <--- all inside the .ts file
                        city: 'sm',
                        state: 'CA'
                    },
                    image: "https://loremflickr.com/320/240" 
                    }
                ...]
                <li class="list-group-item">Age: {{user.age}}</li> <----- users.age used inside .html file 
        String Interpolation uses 2 pairs of Curly Braces to access the string value that was declared inside the
            .ts file and present it in the .html file
        Combining with BAR for added styling
            Ex:
                <li class="list-group-item">Age: {{user.age | uppercase}}</li>
                                                            ^-- bar implies we are gonna make some adjustments to the string value
                                                                ^-- uppercase obviously changes the value to uppercase
                <li class="list-group-item">Balance: {{user.balance | currency}}</li>
                                                                      ^formats the string as currency, adding 2 decimal places + USD money sign
                <li class="list-group-item">Balance: {{user.balance | currency:"GBP" }}</li>
                                                                                ^--- now instead of USD money sign, it is british pound symbol
                <li class="list-group-item">Date Registered: {{user.registered | date:"mm/dd/yyyy"}}</li>   --> Date Registered: 30/02/2018
                <li class="list-group-item">Date Registered: {{user.registered | date }}</li>               --> Date Registered: Jan 2, 2018
Worthy References: 
    Angular:
        https://angular.io/guide/template-syntax
        https://angular.io/guide/cheatsheet



For the time being, run these commands before pushing to ensure that correct Git account is uploading:
git config --global user.name Jordan-Castillo
git config --global user.email 