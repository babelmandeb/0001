//constructor
function User(name,age){
	this.name = name;
	this.age = age;
	this.isAdmin = false;
	this.say = function (w){console.log(w)}	
}

var u1 = new User('hayk', 20);
var u2 = new User('karen', 21);
u1.say('hello');
u2.say('hello');



User.prototype.x = 5; 