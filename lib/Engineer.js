// //creating engineer sublass by extending employee class 
// //import Employee class
// //use super fucnton to call parent constructor i.e "Employee"
// //require name, id , email, role, github username
// //require method getname(), getID(), getRole(), getGit();

const Employee = require('./Employee');

class Engineer extends Employee{
    constructor (name, email, id, role, gitHub) {
        //pass original parameter of employee to super function
        super(name, email, id, role)
        this.gitHub = gitHub;
    }

    getGitHub(){
        return this.gitHub;
    }
}
//exporting 
module.exports = Engineer;
