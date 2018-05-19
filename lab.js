
//consctructor
function User(name,age){
	this.name = name;
	this.age = age;
	this.isAdmin = false;
}

var user1 = new User('hayk', 20);
user1.foo2 = function(){}


var user2 = new User('karen', 21);


console.log(user1.name);
console.log(user2.name);
console.log(user1.consctructor)