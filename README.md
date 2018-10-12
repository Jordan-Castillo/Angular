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


    

For the time being, run these commands before pushing to ensure that correct Git account is uploading:


git config user.name Jordan-Castillo


git config user.email jtcastil@calpoly.edu